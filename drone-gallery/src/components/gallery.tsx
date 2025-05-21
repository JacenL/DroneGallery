'use client';

import { useState } from 'react';

type MediaItem = {
  type: 'image' | 'video';
  url: string;
};

type GalleryProps = {
  media: MediaItem[];
};

const TABS = ['All', 'Photos', 'Videos'] as const;
type Tab = (typeof TABS)[number];

export default function Gallery({ media }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<Tab>('All');
  const [loaded, setLoaded] = useState<boolean[]>(Array(media.length).fill(false));
  const [selected, setSelected] = useState<MediaItem | null>(null);

  const filteredMedia = media.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Photos') return item.type === 'image';
    if (activeTab === 'Videos') return item.type === 'video';
  });

  return (
    <>
      {selected && (
        <div
          className="fixed inset-0 backdrop-blur-xs bg-blue-100/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="w-[90vw] h-[80vh] max-w-screen-xl transform transition duration-300 scale-95 opacity-0 animate-modal">
            {selected.type === 'image' ? (
              <img src={selected.url} alt="Expanded" className="w-full h-full object-contain" />
            ) : (
              <iframe
                src={selected.url}
                allow="autoplay; fullscreen"
                allowFullScreen
                className={`w-full h-full object-contain rounded-lg shadow-lg`}
              />
            )}
          </div>
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto">

        <div className="flex justify-center gap-4 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium transition ${activeTab === tab
                ? 'bg-blue-700 text-white shadow-md'
                : 'bg-white text-blue-700 hover:bg-blue-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredMedia.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(item)}
              className="cursor-pointer relative overflow-hidden rounded-xl shadow group aspect-[4/3] bg-white"
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={`Gallery image ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onLoad={() =>
                    setLoaded((prev) => {
                      const updated = [...prev];
                      updated[idx] = true;
                      return updated;
                    })
                  }
                  className={`w-full h-full object-cover transition-opacity duration-700 ${loaded[idx] ? 'opacity-100' : 'opacity-0'} group-hover:scale-105 group-hover:brightness-90`}
                />
              ) : (
                <iframe
                  src={`${item.url}?rel=0&modestbranding=1&showinfo=0`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-md object-cover"
                  loading="lazy"
                  title={`Video ${idx + 1}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
