import Image from 'next/image';
import { GALLERY, HERO_IMAGE, HERO_IMAGE_LIGHT, thumbUrl } from '@/components/media';

export default function Hero() {
  const photoCount = GALLERY.filter((m) => m.type === 'image').length;
  const videoCount = GALLERY.filter((m) => m.type === 'video').length;

  return (
    <section className="relative z-10 h-[100dvh] min-h-[540px] overflow-hidden">
      <div className="parallax-hero absolute inset-0">
        <Image
          src={thumbUrl(HERO_IMAGE, 2000)}
          alt="Aerial neighborhood in the snow"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="hidden object-cover dark:block"
        />
        <Image
          src={thumbUrl(HERO_IMAGE_LIGHT, 2000)}
          alt="Aerial view of a wooded shoreline and dock"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover dark:hidden"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-black/20 blur-2xl" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-10 sm:px-8 sm:pb-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-xl text-4xl font-medium tracking-tight text-white sm:text-6xl animate-fade-up">
            A bird's eye view
          </h1>
          <p
            className="mt-4 max-w-md text-[15px] leading-6 text-white/80 animate-fade-up"
            style={{ animationDelay: '90ms' }}
          >
            A hobby website for whatever photos and videos I shot with a DJI.
          </p>
          <p
            className="mt-4 text-sm text-white/65 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            {photoCount} photos, {videoCount} videos
          </p>
        </div>
      </div>
    </section>
  );
}
