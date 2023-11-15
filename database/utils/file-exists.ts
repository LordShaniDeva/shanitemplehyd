import { connectToMongo } from '../mongo';
/**
Utility to check if a file exists in the images bucket.
This is useful to prevent duplicate uploads.

 */

async function fileExists(
  filename: string,
  collection: string
): Promise<boolean> {
  if (!filename) throw new Error('Filename is required');
  if (!collection) throw new Error('Collection is required');
  const { client } = await connectToMongo();
  const count = await client
    .db()
    .collection(`${collection}.files`)
    .countDocuments({ filename });

  return !!count;
}

export default fileExists;
