'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/lightbox';
import Reveal from '@/components/reveal';
import { PlayIcon } from '@/components/icons';
import { type MediaItem, thumbUrl, youtubeThumbs } from '@/components/media';

type GalleryProps = {
  media: MediaItem[];
};

export default function Gallery({ media }: GalleryProps) {
  const photos = useMemo(() => media.filter((item) => item.type === 'image'), [media]);
  const videos = useMemo(() => media.filter((item) => item.type === 'video'), [media]);

  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl space-y-14 px-5 sm:px-8">
      <MediaBlock id="photos" title="Photos" items={photos} columns="photos" />
      <MediaBlock id="videos" title="Videos" items={videos} columns="videos" />
    </div>
  );
}

type BlockProps = {
  id: string;
  title: string;
  items: MediaItem[];
  columns: 'photos' | 'videos';
};

function MediaBlock({ id, title, items, columns }: BlockProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id={id}>
      <Reveal className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-sm text-muted tabular-nums">{items.length}</p>
      </Reveal>

      {items.length === 0 ? (
        <p className="py-16 text-muted">Nothing here yet.</p>
      ) : (
        <div
          className={
            columns === 'photos'
              ? 'grid grid-cols-2 gap-1.5 lg:grid-cols-3'
              : 'grid grid-cols-1 gap-1.5 sm:grid-cols-2'
          }
        >
          {items.map((item, idx) => (
            <Reveal key={item.url} delay={Math.min(idx, 8) * 40}>
              <Tile item={item} index={idx} onOpen={() => setSelectedIndex(idx)} />
            </Reveal>
          ))}
        </div>
      )}

      {selectedIndex !== null ? (
        <Lightbox
          items={items}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      ) : null}
    </section>
  );
}

type TileProps = {
  item: MediaItem;
  index: number;
  onOpen: () => void;
};

function Tile({ item, index, onOpen }: TileProps) {
  const [loaded, setLoaded] = useState(false);
  const [thumbIdx, setThumbIdx] = useState(0);

  const isVideo = item.type === 'video';
  const thumbs = isVideo ? youtubeThumbs(item.url) : [thumbUrl(item.url, 1200)];
  const src = thumbs[Math.min(thumbIdx, thumbs.length - 1)];

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden bg-card text-left"
      aria-label={`${isVideo ? 'Play video' : 'View photo'} ${index + 1}`}
    >
      <span className={`relative block overflow-hidden bg-card ${isVideo ? 'aspect-video' : 'aspect-[4/3]'}`}>
        {!loaded ? <span className="skeleton absolute inset-0" aria-hidden /> : null}

        {src ? (
          <Image
            src={src}
            alt={isVideo ? `Video thumbnail ${index + 1}` : `Drone photo ${index + 1}`}
            fill
            sizes={
              isVideo
                ? '(max-width: 640px) 100vw, 50vw'
                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            }
            unoptimized
            onLoad={(e) => {
              const img = e.currentTarget;
              if (isVideo && img.naturalWidth <= 120 && thumbIdx < thumbs.length - 1) {
                setThumbIdx((i) => i + 1);
                return;
              }
              setLoaded(true);
            }}
            onError={() => {
              if (thumbIdx < thumbs.length - 1) setThumbIdx((i) => i + 1);
              else setLoaded(true);
            }}
            className={`object-cover transition duration-500 group-hover:scale-[1.04] ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null}

        {isVideo ? (
          <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/15">
            <span className="grid size-11 place-items-center bg-black/45 text-white backdrop-blur-sm">
              <PlayIcon className="ml-0.5 size-5" />
            </span>
          </span>
        ) : null}
      </span>
    </button>
  );
}
