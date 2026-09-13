import Gallery from '@/components/gallery';
import Header from '@/components/header';
import Hero from '@/components/hero';
import PinShot from '@/components/pin-shot';
import SkyBreak from '@/components/sky-break';
import Filmstrip from '@/components/filmstrip';
import { GALLERY } from '@/components/media';

export default function HomePage() {
  return (
    <>
      <Header overlay />
      <main>
        <Hero />
        <PinShot />
        <Filmstrip />
        <Gallery media={GALLERY} />
        <SkyBreak />
      </main>
    </>
  );
}
