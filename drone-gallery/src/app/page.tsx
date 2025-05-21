'use client';
import Gallery from '@/components/gallery';

export default function HomePage() {

  const media = [
    { type: 'image' as const, url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802603/DJI_0070_o3dp2k.jpg' },
    { type: 'image' as const, url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802565/DJI_0133_qhhcgw.jpg' },
    { type: 'image' as const, url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802565/DJI_0133_qhhcgw.jpg' },
    { type: 'image' as const, url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802547/DJI_0055_sdebj7.jpg' },
    { type: 'image' as const, url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802514/DJI_0060_hoctlo.jpg' },
    { type: 'image' as const, url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802502/DJI_0038_rsjj4b.jpg' },
    { type: 'image' as const, url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802644/dji_export_20240816_190215_1723849335869_sphere_screenshot_qdmseq.jpg' },
    { type: 'image' as const, url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802452/DJI_0121_edit_symozo.jpg' },
    

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
