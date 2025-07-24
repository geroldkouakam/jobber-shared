import cloudinary, { UploadApiErrorResponse ,UploadApiResponse } from 'cloudinary';


export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id: public_id,
        overwrite: overwrite,
        invalidate: invalidate,
        resource_type: 'auto', // zip, image
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error)  resolve(error);
        resolve(result);
      }
    );
  });
}


export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id: public_id,
        overwrite: overwrite,
        invalidate: invalidate,
        chunk_size: 50000, // 50MB
        resource_type: 'video', // only video
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error)  resolve(error);
        resolve(result);
      }
    );
  });
}