'use client';
import styles from '../../UserNewAdvert.module.css';
import { Controller } from 'react-hook-form';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ImagesSectionProps } from './types';

import {
  Box,
  DropZone,
  Field,
  FileInput,
  Heading,
  Icon,
  Label,
  Message,
  PreviewFiles,
} from '@/components';

export const ImagesSection = ({ validate, controls }: ImagesSectionProps) => {
  const { formState, control, watch, register, setValue } = controls;
  const { errors } = formState;

  const mergeFiles = (oldFiles: File[], newFiles: File[]) => {
    const fileMap = new Map();
    [...oldFiles, ...newFiles].forEach((file) => {
      const key = `${file.name}-${file.size}`;
      fileMap.set(key, file);
    });

    return Array.from(fileMap.values());
  };

  return (
    <>
      <Field>
        <Label>Images</Label>
        <Controller
          name="images"
          control={control}
          rules={{ validate }}
          render={({ field: { onChange, ...rest } }) => (
            <DropZone
              onDrop={(e) => {
                const dropped = Array.from(e.dataTransfer.files);
                const mergedFiles = mergeFiles(watch('images'), dropped);
                onChange(mergedFiles);
              }}
              {...rest}
              title="Drag and drop"
            >
              <FileInput
                accept=".jpg,.pdf"
                label="Add images"
                multiple
                {...register('images', { validate })}
                onChange={(e) => {
                  if (!e.target.files) return;
                  const dropped = Array.from(e.target.files);
                  const mergedFiles = mergeFiles(watch('images'), dropped);

                  setValue('images', mergedFiles, {
                    shouldValidate: true,
                    shouldDirty: false,
                  });
                }}
              />
              <Message variant="error">{errors.images?.message}</Message>
            </DropZone>
          )}
        />
      </Field>
      <Field>
        <Label>Preview files</Label>
        <PreviewFiles
          images={[...watch('images')]}
          gridPlacement="column"
          onRemove={(index) => {
            setValue(
              'images',
              [...watch('images')].filter((_, i) => i !== index),
              { shouldValidate: true, shouldDirty: false }
            );
          }}
        >
          <Box className={styles.info}>
            <Icon color="primary" icon={faImage} size="4x" />
            <Heading fw="fw-900" level={4}>
              No Images
            </Heading>
          </Box>
        </PreviewFiles>
      </Field>
    </>
  );
};
