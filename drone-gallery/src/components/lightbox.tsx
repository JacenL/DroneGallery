'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@/components/icons';
import { type MediaItem, thumbUrl, youtubeEmbed, youtubeThumbs } from '@/components/media';

type LightboxProps = {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];
  const count = items.length;
  const [dir, setDir] = useState<'left' | 'right'>('right');

  const prev = useCallback(() => {
    setDir('left');
    onNavigate((index - 1 + count) % count);
  }, [index, count, onNavigate]);

  const next = useCallback(() => {
    setDir('right');
    onNavigate((index + 1) % count);
  }, [index, count, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  if (!item) return null;

  const controlClass = 'grid size-10 place-items-center bg-white text-ink-950 hover:bg-neutral-100';

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="absolute inset-x-0 top-0 flex items-center justify-between p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm text-white">
          {index + 1} / {count}
          <span className="ml-2 text-white/60">{item.type === 'video' ? 'Video' : 'Photo'}</span>
        </span>
        <button type="button" onClick={onClose} aria-label="Close" className={controlClass}>
          <CloseIcon className="size-5" />
        </button>
      </div>

      <div
        key={item.url}
        className={`relative h-[68vh] w-[92vw] max-w-6xl sm:h-[74vh] ${
          dir === 'right' ? 'animate-slide-right' : 'animate-slide-left'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          <Image
            src={item.url}
            alt={`Photo ${index + 1}`}
            fill
            sizes="92vw"
            priority
            unoptimized
            className="object-contain"
          />
        ) : (
          <div className="mx-auto flex h-full w-full items-center">
            <iframe
              src={youtubeEmbed(item.url, true)}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`Video ${index + 1}`}
              className="aspect-video max-h-full w-full"
            />
          </div>
        )}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className={`${controlClass} absolute left-3 top-1/2 -translate-y-1/2 sm:left-5`}
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className={`${controlClass} absolute right-3 top-1/2 -translate-y-1/2 sm:right-5`}
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </>
      ) : null}

      {count > 1 ? (
        <div
          className="no-scrollbar absolute inset-x-0 bottom-12 hidden justify-center gap-1 overflow-x-auto px-8 sm:flex"
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((thumb, i) => {
            const src =
              thumb.type === 'video' ? youtubeThumbs(thumb.url)[0] : thumbUrl(thumb.url, 200);
            const active = i === index;
            return (
              <button
                key={thumb.url}
                type="button"
                onClick={() => {
                  setDir(i > index ? 'right' : 'left');
                  onNavigate(i);
                }}
                aria-label={`Go to item ${i + 1}`}
                aria-current={active ? true : undefined}
                className={`relative h-11 w-14 shrink-0 overflow-hidden ${
                  active ? 'outline outline-2 outline-white' : 'opacity-50 hover:opacity-100'
                }`}
              >
                {src ? (
                  <Image src={src} alt="" fill unoptimized sizes="56px" className="object-cover" />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );

  return createPortal(dialog, document.body);
}
