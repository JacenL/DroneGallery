import Image from 'next/image';
import Reveal from '@/components/reveal';
import { GALLERY, thumbUrl } from '@/components/media';

export default function Filmstrip() {
  const shots = GALLERY.filter((item) => item.type === 'image').slice(0, 8);

  return (
    <section id="slides" className="relative z-10 overflow-hidden pt-[28vh] pb-16 sm:pt-[34vh] sm:pb-20">
      <Reveal className="mx-auto mb-4 max-w-6xl px-5 sm:px-8">
        <h2 className="text-lg font-medium">Favorites</h2>
      </Reveal>

      <div className="no-scrollbar overflow-x-auto sm:overflow-visible">
        <div className="film-track flex w-max gap-2 px-5 sm:px-8">
          {shots.map((shot, index) => (
            <figure key={shot.url} className="w-[200px] shrink-0 sm:w-[230px]">
              <div className="relative aspect-[4/3] overflow-hidden bg-card">
                <Image
                  src={thumbUrl(shot.url, 800)}
                  alt={`Featured photo ${index + 1}`}
                  fill
                  unoptimized
                  sizes="230px"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
