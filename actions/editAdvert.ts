'use server';
import { auth } from '@/auth';
import { connectDBAction, errorResponseAction } from '@/lib';
import { AdvertSchema } from '@/models';

export const editAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');

    // Part parsing to będzie jedna funkcja helper
    // będzie w lib actions newAdvert

    // pamietaj jedno zadanie funkcji
    // ---- ten fragment się powtarza newAdvert action także
    const dataForm = {
      ...data,
      price: data.price,
      year: data.year,
      area: data.area,
      rooms: data.rooms,
      bathrooms: data.bathrooms,
      amenities: JSON.parse(formData.getAll('amenities').toString()),
      files: formData.getAll('files'),
      images: JSON.parse(formData.getAll('images').toString()),
      deleteImagesIds: JSON.parse(
        formData.getAll('deleteImagesIds').toString()
      ),
    };

    const parsedData = AdvertSchema.parse(dataForm);

    // ----

    const files = formData.getAll('files');
    const deletedImages = formData.get('deleteImagesIds');
    const filesData = new FormData();
    files.forEach((file) => filesData.append('files', file));
    filesData.append('deletedImages', JSON.stringify(deletedImages));
    // Tu trzeba dodać teraz deleteImagesIds do body by usunąć z imagekit
    // w tym api/upload tam trzeba to jakoś zrobić by działał na
    // edit także i podczas new advert upload

    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/v1/upload`,
    //   {
    //     body: filesData,
    //     method: 'POST',
    //     cache: 'no-store',
    //   }
    // );

    // if (!response.ok) return errorResponseAction('Upload failed');

    // const storedUrls = (await response.json()) as {
    //   payload: { url: string; fileId: string }[];
    // };

    return { message: 'Edit advert successful', success: true };
  }
);
