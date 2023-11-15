import { Readable } from 'stream';
import { NextResponse } from 'next/server';
import { connectToMongo } from '@/database/mongo';
import fileExists from '@/database/utils/file-exists';
import { IMAGE_BUCKET_NAME } from '@/database/config';

export async function POST(req: Request) {
  const { bucket } = await connectToMongo();
  // get the form data
  const data = await req.formData();
  // map through all the entries
  for (const entry of Array.from(data.entries())) {
    // console.log({ entry });
    const [filename, value] = entry as [string, File];
    // FormDataEntryValue can either be type `Blob` or `string`
    // if its type is object then it's a Blob
    const isFile = typeof value == 'object';

    if (isFile) {
      const blob = value as Blob;
      const existing = await fileExists(filename, IMAGE_BUCKET_NAME);
      if (existing) {
        NextResponse.json({
          success: false,
          timestamp: new Date().toISOString(),
          message: `File with name ${filename} already exists`,
        });
        // If file already exists, let's skip it.
        // If you want a different behavior such as override, modify this part.
        continue;
      }

      //conver the blob to stream
      const buffer = Buffer.from(await blob.arrayBuffer());
      const stream = Readable.from(buffer);

      const uploadStream = bucket.openUploadStream(filename, {
        // make sure to add content type so that it will be easier to set later.
        contentType: blob.type,
        // metadata: req.body, //add your metadata here if any
      });

      // pipe the readable stream to a writeable stream to save it to the database
      await stream.pipe(uploadStream);
    }
  }

  // return the response after all the entries have been processed.
  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    message: 'Files uploaded successfully',
  });
}
