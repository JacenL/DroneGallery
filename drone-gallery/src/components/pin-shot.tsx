'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GALLERY, thumbUrl } from '@/components/media';

const SHOT = GALLERY.find((item) => item.type === 'image')?.url ?? '';

export default function PinShot() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      node.style.setProperty('--pin', '1');
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const travel = Math.max(1, node.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      node.style.setProperty('--pin', p.toFixed(4));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (!SHOT) return null;

  return (
    <section id="pin" ref={ref} className="pin-scene relative z-10">
      <div className="pin-sticky">
        <div className="pin-frame">
          <Image
            src={thumbUrl(SHOT, 2000)}
            alt="Aerial view of a neighborhood at dusk, streetlights on under an orange sunset"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="pin-veil" />
          <div className="pin-copy z-10">
            <h2 className="max-w-xl text-3xl font-medium tracking-tight text-white sm:text-5xl">
              After sunset
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-6 text-white/80">
              A neighborhood settling in for the night, photographed from a DJI as the last
              color left the sky.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
