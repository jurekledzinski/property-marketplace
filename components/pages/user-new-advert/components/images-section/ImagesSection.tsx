'use client';
import styles from '../../UserNewAdvert.module.css';
import { Controller } from 'react-hook-form';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ImagesSectionProps } from './types';
import { validationOptions } from './hooks';
import { cloneDeep } from 'lodash';

import {
  useControlValidateFiles,
  useRemovePreviewFiles,
  useChangeFiles,
} from './hooks';

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
  useValidateFiles,
  useValidateFilesOnChange,
} from '@/components';

export const ImagesSection = ({
  controls,
  deleteUploadedFiles,
  uploadFiles,
  validationInfo,
}: ImagesSectionProps) => {
  const { formState, control, getValues, watch, register, setValue } = controls;
  const { errors } = formState;

  const onPreValidation = useValidateFilesOnChange({
    ...validationOptions,
    onError: validationInfo,
  });

  const { onChangeFiles, onDrop } = useChangeFiles({
    onSetFiles: (files) =>
      setValue('files', files, {
        shouldValidate: true,
        shouldDirty: false,
      }),
    uploadFiles,
    onPreValidation,
    files: getValues('files') || [],
  });

  const onRemove = useRemovePreviewFiles({
    deleteUploadedFiles,
    deleteImagesIds: getValues('deleteImagesIds'),
  });

  const checkFiles = useValidateFiles(validationOptions);
  const validate = useControlValidateFiles({ checkFiles });

  return (
    <>
      <Field>
        <Label>Images</Label>
        <Controller
          name="files"
          control={control}
          rules={{ validate }}
          render={({ field: { onChange, ...rest } }) => (
            <DropZone
              {...rest}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onChange(onDrop(e));
              }}
              title="Drag and drop"
            >
              <FileInput
                accept=".jpg,.jpeg,.png"
                label="Add images"
                multiple
                {...register('files', { validate })}
                onChange={(e) => {
                  onChangeFiles(e);
                }}
              />
              <Message variant="error">{errors.files?.message}</Message>
            </DropZone>
          )}
        />
      </Field>
      <Field>
        <Label>Preview files</Label>
        <PreviewFiles
          images={cloneDeep(watch('images') || [])}
          gridPlacement="column"
          onRemove={onRemove}
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
