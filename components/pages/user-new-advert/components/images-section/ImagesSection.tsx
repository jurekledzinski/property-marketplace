'use client';
import styles from '../../UserNewAdvert.module.css';
import { Controller } from 'react-hook-form';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ImagesSectionProps } from './types';

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
} from '@/components';

export const ImagesSection = ({
  controls,
  uploadFiles,
}: ImagesSectionProps) => {
  const { formState, control, watch, register, setValue } = controls;
  const { errors } = formState;

  const { onChangeFiles, onDrop } = useChangeFiles({
    setValue,
    watch,
    uploadFiles,
  });

  const onRemove = useRemovePreviewFiles({ setValue, watch });

  const checkFiles = useValidateFiles({
    allowTypes: ['image/jpeg', 'image/png'],
    maxAmount: 10,
    maxTotalSize: [6, 'MB'],
  });

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
              onDrop={(e) => onChange(onDrop(e))}
              title="Drag and drop"
            >
              <FileInput
                accept=".jpg,.pdf"
                label="Add images"
                multiple
                {...register('files', { validate })}
                onChange={onChangeFiles}
              />
              <Message variant="error">{errors.files?.message}</Message>
            </DropZone>
          )}
        />
      </Field>
      <Field>
        <Label>Preview files</Label>
        <PreviewFiles
          images={[...(watch('files') ?? []), ...watch('images')!]}
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
