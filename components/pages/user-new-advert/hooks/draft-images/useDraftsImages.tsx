'use client';
import { ApiErrorResponse, ApiSuccessResponse } from '@/lib';
import { clientEndpoint } from '@/utils';
import { DraftFile } from '@/models';
import { DraftPayload, useDraftsImagesProps } from './types';
import { fetchApiClient } from '@/helpers';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useDraftsImages = ({ advertId, mode }: useDraftsImagesProps) => {
  const [draft, setDraft] = useState<DraftPayload>({
    advertId: '',
    images: [],
    deleteImages: [],
  });

  const draftImages = useQuery({
    queryKey: ['draft'],
    queryFn: async () =>
      await fetchApiClient<DraftFile>({
        credentials: 'include',
        url: clientEndpoint.getDraftImages(mode, advertId),
      }),
    refetchOnWindowFocus: false,
  });

  const updateDraftImages = useMutation<
    ApiSuccessResponse<DraftFile> | ApiErrorResponse,
    unknown,
    {
      images: DraftFile['images'];
      deletedImages: DraftFile['deleteImages'];
    }
  >({
    mutationFn: async ({ deletedImages, images }) => {
      const response = await fetchApiClient<DraftFile>({
        body: JSON.stringify({ deletedImages, images }),
        credentials: 'include',
        method: 'PATCH',
        url: clientEndpoint.updateDraftImages(advertId),
      });

      if (!response.success) return response;
      return response;
    },
  });

  const deleteDraftImages = useMutation<
    ApiSuccessResponse<DraftFile> | ApiErrorResponse,
    unknown,
    { images: DraftFile['images'] }
  >({
    mutationFn: async ({ images }) => {
      const response = await fetchApiClient<DraftFile>({
        body: JSON.stringify({ images }),
        credentials: 'include',
        method: 'DELETE',
        url: clientEndpoint.deleteDraftImages(advertId),
      });

      if (!response.success) return response;
      return response;
    },
    retry: false,
  });

  useEffect(() => {
    if (!draftImages.data) return;
    if (!draftImages.data.success || !draftImages.data.payload) return;

    setDraft({
      advertId: draftImages.data.payload.advertId || '',
      images: draftImages.data.payload.images || [],
      deleteImages: draftImages.data.payload.deleteImages || [],
    });
  }, [draftImages.data]);

  const deleteDraft = (images: DraftFile['images']) => {
    deleteDraftImages.mutate({ images });
  };

  const updateDraft = (
    images: DraftFile['images'],
    deletedImages?: DraftFile['deleteImages']
  ) => {
    updateDraftImages.mutate({ deletedImages, images });
  };

  return { deleteDraft, draft, updateDraft };
};
