'use client';
import Gallery from '@/components/gallery';

export default function HomePage() {

  const media = [
    { type: 'image' as const, url: 'https://i.imgur.com/jbAmy0L.jpeg' },
    { type: 'image' as const, url: 'https://i.imgur.com/lHQEVMh.jpeg' },
    { type: 'image' as const, url: 'https://i.imgur.com/cTidLNA.jpeg' },
    { type: 'image' as const, url: 'https://i.imgur.com/0THRgU7.jpeg' },
    { type: 'image' as const, url: 'https://i.imgur.com/sHSKXY1.jpeg' },
    { type: 'image' as const, url: 'https://i.imgur.com/PVsegxW.jpeg' },
    { type: 'image' as const, url: 'https://i.imgur.com/zQEUvXA.jpeg' },
    { type: 'image' as const, url: 'https://i.imgur.com/GAd29Rz.jpeg' },
    

    { type: 'video' as const, url: 'https://www.youtube.com/embed/retUjL3BJoo' },
    { type: 'video' as const, url: 'https://www.youtube.com/embed/YVqLP3Jc00U' },
    { type: 'video' as const, url: 'https://www.youtube.com/embed/YteY0L9Xldw' },
    { type: 'video' as const, url: 'https://www.youtube.com/embed/TYt2XciOqaw' },
    { type: 'video' as const, url: 'https://www.youtube.com/embed/TO6LRXZBdkc' },
    { type: 'video' as const, url: 'https://www.youtube.com/embed/q0a5s6CzxEo' },
    { type: 'video' as const, url: 'https://www.youtube.com/embed/ZR8g7X8jVrM' },
  ];  

  return (
    <main className="p-6">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-900 tracking-tight">My Drone Gallery</h1>
      <Gallery media={media} />
    </main>
  );
}
