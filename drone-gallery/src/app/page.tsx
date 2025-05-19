'use client';
import Gallery from '@/components/gallery';

export default function HomePage() {
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Photo Gallery</h1>
      <Gallery images={images} />
    </main>
  );
}
