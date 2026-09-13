import Footer from '@/components/footer';

function Grass() {
  return (
    <svg
      viewBox="0 0 800 80"
      className="h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path fill="#141f18" d="M0 22 C 90 12, 160 26, 250 16 S 410 4, 520 18 S 680 30, 800 12 V 80 H 0 Z" />
      <path fill="#18241c" d="M0 32 C 80 22, 140 38, 220 28 S 360 12, 460 26 S 620 44, 800 22 V 80 H 0 Z" />
      <path fill="#1f3026" d="M0 46 C 120 34, 200 52, 310 40 S 500 26, 640 42 S 740 54, 800 38 V 80 H 0 Z" />
      <rect fill="#1f3026" x="0" y="68" width="800" height="12" />
      <g fill="none" stroke="#3d5a46" strokeWidth="1.15" strokeLinecap="round">
        <path d="M22 58 Q 20 46, 18 34" />
        <path d="M28 60 Q 30 44, 26 30" />
        <path d="M34 58 Q 32 48, 36 36" />
        <path d="M86 54 Q 82 40, 80 28" />
        <path d="M94 56 Q 98 40, 96 26" />
        <path d="M102 55 Q 100 44, 104 32" />
        <path d="M164 52 Q 160 38, 158 26" />
        <path d="M174 54 Q 178 38, 176 24" />
        <path d="M182 52 Q 180 42, 184 32" />
        <path d="M244 50 Q 240 36, 238 24" />
        <path d="M254 52 Q 258 36, 255 22" />
        <path d="M318 48 Q 314 34, 312 22" />
        <path d="M328 50 Q 332 34, 330 20" />
        <path d="M390 46 Q 386 32, 384 20" />
        <path d="M400 48 Q 404 32, 402 18" />
        <path d="M408 46 Q 406 36, 410 26" />
        <path d="M476 44 Q 472 32, 470 22" />
        <path d="M486 46 Q 490 32, 488 20" />
        <path d="M546 48 Q 542 34, 540 22" />
        <path d="M556 50 Q 560 34, 558 20" />
        <path d="M626 52 Q 622 38, 620 26" />
        <path d="M636 54 Q 640 38, 638 24" />
        <path d="M696 54 Q 692 40, 690 28" />
        <path d="M706 56 Q 710 40, 708 26" />
        <path d="M758 58 Q 754 44, 752 32" />
        <path d="M768 60 Q 772 44, 770 30" />
      </g>
      <g fill="#2a4032">
        <ellipse cx="58" cy="64" rx="3.2" ry="1.4" />
        <ellipse cx="290" cy="66" rx="2.4" ry="1.1" />
        <ellipse cx="512" cy="62" rx="2.8" ry="1.2" />
        <ellipse cx="744" cy="68" rx="2.2" ry="1" />
      </g>
      <g fill="#c8d98a">
        <circle cx="130" cy="42" r="1.1" className="star-twinkle" />
        <circle cx="348" cy="36" r="0.9" className="star-twinkle" style={{ animationDelay: '-1.2s' }} />
        <circle cx="572" cy="40" r="1" className="star-twinkle" style={{ animationDelay: '-2.4s' }} />
        <circle cx="690" cy="34" r="0.8" className="star-twinkle" style={{ animationDelay: '-0.6s' }} />
      </g>
    </svg>
  );
}

function Sand() {
  return (
    <svg
      viewBox="0 0 800 80"
      className="h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path fill="#d7c49a" d="M0 18 C 110 8, 190 22, 280 12 S 450 2, 560 16 S 700 28, 800 10 V 80 H 0 Z" />
      <path fill="#e8d5a8" d="M0 30 C 90 18, 170 36, 260 24 S 420 10, 530 26 S 680 40, 800 20 V 80 H 0 Z" />
      <path fill="#dfc58e" d="M0 46 C 110 34, 210 52, 320 40 S 510 28, 650 44 S 750 56, 800 38 V 80 H 0 Z" />
      <path fill="#d4bc86" d="M0 62 C 140 54, 260 66, 400 58 S 620 50, 800 60 V 80 H 0 Z" />
      <rect fill="#d4bc86" x="0" y="68" width="800" height="12" />
      <g fill="none" stroke="#c4b07a" strokeWidth="1.1" strokeLinecap="round">
        <path d="M48 38 Q 46 28, 44 18" />
        <path d="M54 40 Q 56 26, 52 16" />
        <path d="M60 38 Q 58 30, 62 20" />
        <path d="M198 32 Q 196 22, 194 12" />
        <path d="M206 34 Q 210 20, 208 10" />
        <path d="M368 28 Q 366 18, 364 10" />
        <path d="M376 30 Q 380 16, 378 8" />
        <path d="M582 34 Q 580 24, 578 14" />
        <path d="M590 36 Q 594 22, 592 12" />
        <path d="M734 30 Q 732 20, 730 12" />
        <path d="M742 32 Q 746 18, 744 10" />
      </g>
      <g fill="#c8ae72">
        <circle cx="70" cy="54" r="1.1" />
        <circle cx="118" cy="62" r="0.8" />
        <circle cx="156" cy="50" r="0.7" />
        <circle cx="210" cy="50" r="1" />
        <circle cx="268" cy="66" r="0.9" />
        <circle cx="304" cy="58" r="0.9" />
        <circle cx="352" cy="48" r="0.7" />
        <circle cx="388" cy="52" r="1.2" />
        <circle cx="430" cy="64" r="0.8" />
        <circle cx="470" cy="64" r="0.8" />
        <circle cx="518" cy="50" r="1" />
        <circle cx="562" cy="56" r="1" />
        <circle cx="610" cy="68" r="0.7" />
        <circle cx="648" cy="50" r="0.9" />
        <circle cx="692" cy="60" r="0.8" />
        <circle cx="722" cy="60" r="1.1" />
        <circle cx="768" cy="52" r="0.7" />
      </g>
      <g fill="none" stroke="#b89a6a" strokeWidth="1.2" strokeLinecap="round">
        <path d="M250 58 Q 268 54, 286 60" />
        <path d="M620 52 Q 638 48, 658 54" />
      </g>
      <g fill="#d7c094" stroke="#c4ae78" strokeWidth="0.6">
        <ellipse cx="140" cy="58" rx="3.2" ry="1.8" transform="rotate(-18 140 58)" />
        <ellipse cx="444" cy="62" rx="2.6" ry="1.5" transform="rotate(22 444 62)" />
        <ellipse cx="700" cy="54" rx="2.8" ry="1.6" transform="rotate(-12 700 54)" />
      </g>
    </svg>
  );
}

export default function SkyBreak() {
  return (
    <section id="sky" className="relative z-[1] min-h-[100dvh]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-32 dark:block sm:h-40">
        <Grass />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 dark:hidden sm:h-40">
        <Sand />
      </div>
      <Footer />
    </section>
  );
}
