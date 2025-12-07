import 'server-only';
import busboy from 'busboy';
import ImageKit from 'imagekit';
import { auth } from '@/auth';
import { connectDBAuth } from '@/lib';
import { errorResponseApi, successResponseApi } from '@/utils-server';
import { NextResponse } from 'next/server';
import { Readable } from 'node:stream';
import { ReadableStream } from 'node:stream/web';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

export const runtime = 'nodejs';

export const config = {
  api: {
    bodyParser: false,
  },
};

type Payload = {
  url: string;
  fileId: string;
  name: string;
};
type UploadInfo = Promise<Payload>[];

export const POST = connectDBAuth(
  auth(async (request) => {
    if (!request.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: process.env.IMAGEKIT_URL!,
    });

    return new Promise<NextResponse>((resolve, reject) => {
      const headers = Object.fromEntries(request.headers);

      const bb = busboy({ headers });

      const uploadFileInfo: UploadInfo = [];

      bb.on('file', (name, file, info) => {
        const tempFilePath = path.join(os.tmpdir(), `${Date.now()}-${info.filename}`);
        const writeStream = fs.createWriteStream(tempFilePath);

        file.pipe(writeStream);

        const uploadPromise = new Promise<Payload>((res) => {
          writeStream.on('finish', async () => {
            try {
              const result = await imagekit.upload({
                file: fs.createReadStream(tempFilePath),
                fileName: info.filename,
                folder: 'Houses',
              });

              fs.unlink(tempFilePath, () => {});

              res({
                fileId: result.fileId,
                name: info.filename,
                url: result.url,
              });
            } catch {
              reject(
                errorResponseApi({
                  message: 'Upload failed for some files',
                  status: 500,
                  payload: { url: '', fileId: '', name: info.filename },
                })
              );
            }
          });
        });

        uploadFileInfo.push(uploadPromise);

        file.on('error', () => {
          return errorResponseApi({
            message: 'Upload failed',
            status: 500,
            payload: uploadFileInfo[0],
          });
        });
      });

      bb.on('finish', async () => {
        try {
          const result = await Promise.allSettled(uploadFileInfo);

          if ('value' in result[0]) {
            resolve(
              successResponseApi({
                payload: result[0].value,
              })
            );
          }
        } catch {
          reject(
            errorResponseApi({
              message: 'Upload failed',
              status: 500,
              payload: uploadFileInfo[0],
            })
          );
        }
      });

      bb.on('error', () => {
        return reject(
          errorResponseApi({
            message: 'Upload failed',
            status: 500,
            payload: uploadFileInfo[0],
          })
        );
      });

      const nodeStream = Readable.fromWeb(request.body! as ReadableStream<Uint8Array<ArrayBuffer>>);
      nodeStream.pipe(bb);
    });
  })
);
