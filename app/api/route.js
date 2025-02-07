import fs from 'fs';
import path from 'path';

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');

  try {
    const imageFiles = fs.readdirSync(galleryDir);
    const imagePaths = imageFiles.map((file) => `/images/gallery/${file}`);

    return Response.json(imagePaths);
  } catch (error) {
    return Response.json({ error: "Failed to load images" }, { status: 500 });
  }
}
