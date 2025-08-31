import 'server-only';
import busboy from 'busboy';
import ImageKit from 'imagekit';
import { auth } from '@/auth';
import { connectDBAuth, errorResponseApi, successResponseApi } from '@/lib';
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

export const POST = connectDBAuth(
  auth(async (request) => {
    console.log('POST ADVERT auth ---->', request.auth);
    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: 'https://ik.imagekit.io/mdklwracd5rti',
    });

    return new Promise<NextResponse>((resolve, reject) => {
      const headers = Object.fromEntries(request.headers);

      const bb = busboy({ headers });
      const uploadPromises: Promise<string>[] = [];

      bb.on('file', (name, file, info) => {
        const tempFilePath = path.join(
          os.tmpdir(),
          `${Date.now()}-${info.filename}`
        );
        const writeStream = fs.createWriteStream(tempFilePath);

        file.pipe(writeStream);

        const uploadPromise = new Promise<string>((res, rej) => {
          writeStream.on('finish', async () => {
            try {
              const result = await imagekit.upload({
                file: fs.createReadStream(tempFilePath),
                fileName: info.filename,
                folder: 'Houses',
              });

              fs.unlink(tempFilePath, () => {});
              res(result.url);
            } catch (err) {
              rej(err);
              return errorResponseApi({
                status: 500,
                message: 'Upload failed',
              });
            }
          });
        });

        uploadPromises.push(uploadPromise);

        file.on('error', () =>
          errorResponseApi({ message: 'Upload failed', status: 500 })
        );
      });

      bb.on('finish', async () => {
        try {
          const storedURLs = await Promise.all(uploadPromises);
          resolve(successResponseApi({ payload: storedURLs }));
        } catch {
          reject(errorResponseApi({ message: 'Upload failed', status: 500 }));
        }
      });

      bb.on('error', (err) => reject(err));

      // Convert Fetch API stream → Node stream
      const nodeStream = Readable.fromWeb(
        request.body! as ReadableStream<Uint8Array<ArrayBuffer>>
      );
      nodeStream.pipe(bb);
    });
  })
);
