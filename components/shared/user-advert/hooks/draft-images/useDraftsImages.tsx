'use client';
import { ApiErrorResponse, ApiSuccessResponse } from '@/services';
import { clientEndpoints } from '@/utils-client';
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

  const { data: draftData } = useQuery({
    queryKey: ['drafts'],
    queryFn: async () =>
      await fetchApiClient<DraftFile>({
        credentials: 'include',
        url: clientEndpoints.getDraftImages(mode, advertId),
      }),
    refetchOnWindowFocus: false,
  });

  const updateDraftImages = useMutation<
    ApiSuccessResponse<DraftFile> | ApiErrorResponse,
    unknown,
    {
      images: DraftFile['images'];
      deleteImages: DraftFile['deleteImages'];
    }
  >({
    mutationFn: async ({ deleteImages, images }) => {
      const response = await fetchApiClient<DraftFile>({
        body: JSON.stringify({ deleteImages, images }),
        credentials: 'include',
        method: 'PATCH',
        url: clientEndpoints.updateDraftImages(advertId),
      });

      if (!response.success) return response;
      return response;
    },
  });

  const deleteDraftImages = useMutation<
    ApiSuccessResponse<DraftFile> | ApiErrorResponse,
    unknown,
    { deleteImages: DraftFile['deleteImages']; images: DraftFile['images'] }
  >({
    mutationFn: async ({ deleteImages, images }) => {
      const response = await fetchApiClient<DraftFile>({
        body: JSON.stringify({ deleteImages, images }),
        credentials: 'include',
        method: 'DELETE',
        url: clientEndpoints.deleteDraftImages(advertId),
      });

      if (!response.success) return response;
      return response;
    },
    retry: false,
  });

  useEffect(() => {
    if (!draftData) return;
    if (!draftData.success || !draftData.payload) return;

    setDraft({
      advertId: draftData.payload.advertId || '',
      images: draftData.payload.images || [],
      deleteImages: draftData.payload.deleteImages || [],
    });
  }, [draftData]);

  const deleteDraft = async (
    images: DraftFile['images'],
    deleteImages: DraftFile['deleteImages']
  ) => {
    return await deleteDraftImages.mutateAsync({ deleteImages, images });
  };

  const updateDraft = (
    images: DraftFile['images'],
    deleteImages?: DraftFile['deleteImages']
  ) => {
    updateDraftImages.mutate({ deleteImages, images });
  };

  return { deleteDraft, draft, updateDraft };
};
