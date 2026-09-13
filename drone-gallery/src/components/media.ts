export type MediaItem = {
  type: 'image' | 'video';
  url: string;
};

export const HERO_IMAGE =
  'https://res.cloudinary.com/jaycenl/image/upload/v1747802452/DJI_0121_edit_symozo.jpg';

export const AUTH_BACKDROP =
  'https://res.cloudinary.com/jaycenl/image/upload/v1747802565/DJI_0133_qhhcgw.jpg';

export const GALLERY: MediaItem[] = [
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802603/DJI_0070_o3dp2k.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802565/DJI_0133_qhhcgw.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802558/DJI_0132_tcf6wh.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802547/DJI_0055_sdebj7.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802514/DJI_0060_hoctlo.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1760279204/DJI_0034_iq0l72.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1760279124/DJI_0019_q19zib.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802502/DJI_0038_rsjj4b.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802644/dji_export_20240816_190215_1723849335869_sphere_screenshot_qdmseq.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1747802452/DJI_0121_edit_symozo.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1760278086/DJI_0085_mrruxw.jpg' },
  { type: 'image', url: 'https://res.cloudinary.com/jaycenl/image/upload/v1760278099/DJI_0086_gunzcp.jpg' },
  { type: 'video', url: 'https://www.youtube.com/embed/retUjL3BJoo' },
  { type: 'video', url: 'https://www.youtube.com/embed/YVqLP3Jc00U' },
  { type: 'video', url: 'https://www.youtube.com/embed/gtLqBB3BJAs' },
  { type: 'video', url: 'https://www.youtube.com/embed/YteY0L9Xldw' },
  { type: 'video', url: 'https://www.youtube.com/embed/TYt2XciOqaw' },
  { type: 'video', url: 'https://www.youtube.com/embed/TO6LRXZBdkc' },
  { type: 'video', url: 'https://www.youtube.com/embed/q0a5s6CzxEo' },
  { type: 'video', url: 'https://www.youtube.com/embed/ZR8g7X8jVrM' },
  { type: 'video', url: 'https://www.youtube.com/embed/e8RR3uLMZVU' },
];

/** Pull the YouTube video ID out of an /embed/ or /watch?v= URL. */
export function youtubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.pathname.startsWith('/embed/')) return u.pathname.split('/')[2] || null;
    if (u.searchParams.get('v')) return u.searchParams.get('v');
    if (u.hostname === 'youtu.be') return u.pathname.slice(1) || null;
  } catch {
    /* ignore */
  }
  return null;
}

/** Thumbnail candidates for a YouTube video, best first. */
export function youtubeThumbs(url: string): string[] {
  const id = youtubeId(url);
  if (!id) return [];
  return [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  ];
}

/** Embed URL with playback-friendly params for the lightbox. */
export function youtubeEmbed(url: string, autoplay = false): string {
  try {
    const u = new URL(url);
    u.searchParams.set('rel', '0');
    u.searchParams.set('modestbranding', '1');
    if (autoplay) u.searchParams.set('autoplay', '1');
    return u.toString();
  } catch {
    return url;
  }
}

/**
 * For Cloudinary-hosted images, request a right-sized, auto-format,
 * auto-quality derivative for grid thumbnails. Other hosts pass through.
 */
export function thumbUrl(url: string, width = 1200): string {
  const marker = '/image/upload/';
  const i = url.indexOf(marker);
  if (i === -1) return url;
  const head = url.slice(0, i + marker.length);
  const tail = url.slice(i + marker.length);
  return `${head}w_${width},c_limit,q_auto,f_auto/${tail}`;
}
