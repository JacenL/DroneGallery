function SoftCloud({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 280 110"
      className="h-auto w-full"
      aria-hidden
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <ellipse cx="94" cy="72" rx="74" ry="30" fill="#d9e4f0" fillOpacity="0.16" />
      <ellipse cx="92" cy="66" rx="70" ry="30" fill="white" fillOpacity="0.38" />
      <ellipse cx="158" cy="56" rx="88" ry="38" fill="white" fillOpacity="0.42" />
      <ellipse cx="68" cy="52" rx="44" ry="24" fill="#fffdf8" fillOpacity="0.32" />
      <ellipse cx="214" cy="64" rx="50" ry="24" fill="#fff6e4" fillOpacity="0.22" />
    </svg>
  );
}

function Bird({
  className,
  variant = 'm',
}: {
  className?: string;
  variant?: 'm' | 'gull';
}) {
  return (
    <svg viewBox="0 0 40 24" className={className} fill="none" aria-hidden>
      <path
        d={variant === 'gull' ? 'M1 15 Q 11 3 17 15 Q 26 1 39 16' : 'M2 18 Q 12 2 20 18 Q 28 2 38 18'}
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SkyBird({
  wrap,
  bird,
  duration,
  delay,
  variant = 'm',
}: {
  wrap: string;
  bird: string;
  duration: string;
  delay?: string;
  variant?: 'm' | 'gull';
}) {
  return (
    <div className={wrap}>
      <div className="bird-shift" style={{ animationDuration: duration, animationDelay: delay }}>
        <Bird className={bird} variant={variant} />
      </div>
    </div>
  );
}

function Wave({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 80" className={className} fill="none" preserveAspectRatio="none" aria-hidden>
      <path
        d="M0 44 C 75 18, 150 70, 225 44 S 375 18, 450 44 S 600 70, 675 44 S 825 18, 900 44 S 1050 70, 1125 44 S 1200 18, 1275 44"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DaySky() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden dark:hidden" aria-hidden>
      <div className="day-sky absolute inset-0">
        <div className="sky-haze absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[55%] bg-[linear-gradient(180deg,rgba(168,204,232,0.28)_0%,rgba(255,214,150,0.16)_42%,transparent_100%)]" />
          <div className="absolute -right-24 -top-28 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,214,120,0.42)_0%,rgba(232,176,92,0.16)_38%,transparent_70%)]" />
          <div className="absolute -left-24 top-[32%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(196,140,72,0.12)_0%,transparent_70%)]" />
        </div>

        <SkyBird
          wrap="sky-birds absolute right-[14%] top-24 sm:right-[20%] sm:top-28"
          bird="w-9 text-fg/40"
          duration="9s"
        />
        <SkyBird
          wrap="sky-birds absolute right-[22%] top-[18%] sm:right-[26%]"
          bird="w-6 text-fg/28"
          duration="11s"
          delay="-2s"
          variant="gull"
        />
        <SkyBird
          wrap="sky-birds absolute right-[8%] top-32 sm:top-36"
          bird="w-7 text-fg/30"
          duration="7.5s"
          delay="-4s"
        />
        <SkyBird
          wrap="sky-birds absolute left-[12%] top-28 sm:left-[16%] sm:top-32"
          bird="w-6 text-fg/24"
          duration="10s"
          delay="-3s"
          variant="gull"
        />
        <SkyBird
          wrap="sky-birds absolute left-[22%] top-[22%]"
          bird="w-5 text-fg/20"
          duration="13s"
          delay="-6s"
        />
        <SkyBird
          wrap="sky-birds absolute left-[8%] top-[40%]"
          bird="w-8 text-fg/26"
          duration="8.5s"
          delay="-1.5s"
        />
        <SkyBird
          wrap="sky-birds absolute left-[46%] top-[16%]"
          bird="w-5 text-fg/18"
          duration="12s"
          delay="-5s"
          variant="gull"
        />
        <SkyBird
          wrap="sky-birds absolute right-[10%] top-[46%]"
          bird="w-8 text-fg/32"
          duration="10s"
          delay="-1s"
        />
        <SkyBird
          wrap="sky-birds absolute right-[18%] top-[50%]"
          bird="w-5 text-fg/22"
          duration="12s"
          delay="-6s"
          variant="gull"
        />

        <div className="sky-cloud-far absolute top-16 w-72 sm:w-[22rem]">
          <div className="cloud-across" style={{ animationDuration: '95s' }}>
            <SoftCloud />
          </div>
        </div>
        <div className="sky-cloud-mid absolute top-36 w-80 sm:w-[26rem]">
          <div className="cloud-across-rev" style={{ animationDuration: '120s', animationDelay: '-40s' }}>
            <SoftCloud flip />
          </div>
        </div>
        <div className="sky-cloud-near absolute top-[44%] w-64 sm:w-80">
          <div className="cloud-across-near" style={{ animationDuration: '72s', animationDelay: '-20s' }}>
            <SoftCloud />
          </div>
        </div>
        <div className="sky-cloud-far absolute top-[8%] w-52 sm:w-64">
          <div className="cloud-across" style={{ animationDuration: '130s', animationDelay: '-70s' }}>
            <SoftCloud flip />
          </div>
        </div>
      </div>

      <div className="sky-dawn pointer-events-none absolute inset-0" />
      <div className="sky-horizon pointer-events-none absolute inset-x-0 bottom-0 h-[48%]" />

      <div className="sky-sun absolute h-64 w-64 sm:h-80 sm:w-80">
        <div className="sky-sun-day h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,220,140,0.55)_0%,rgba(255,206,110,0.2)_38%,transparent_68%)]" />
        <div className="sky-sun-rise absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,236,170,0.95)_0%,rgba(255,168,64,0.7)_22%,rgba(255,96,40,0.32)_48%,transparent_72%)]" />
      </div>

      <div className="sky-flock pointer-events-none absolute inset-0 z-[3]">
        <SkyBird
          wrap="absolute left-[14%] bottom-[30%]"
          bird="w-7 text-fg/38"
          duration="8s"
          variant="gull"
        />
        <SkyBird
          wrap="absolute left-[21%] bottom-[36%]"
          bird="w-5 text-fg/28"
          duration="10s"
          delay="-2s"
        />
        <SkyBird
          wrap="absolute left-[28%] bottom-[31%]"
          bird="w-8 text-fg/34"
          duration="7s"
          delay="-4s"
          variant="gull"
        />
        <SkyBird
          wrap="absolute left-[36%] bottom-[40%]"
          bird="w-4 text-fg/22"
          duration="12s"
          delay="-1s"
        />
        <SkyBird
          wrap="absolute left-[43%] bottom-[33%]"
          bird="w-6 text-fg/30"
          duration="9s"
          delay="-5s"
        />
        <SkyBird
          wrap="absolute left-[52%] bottom-[38%]"
          bird="w-5 text-fg/24"
          duration="11s"
          delay="-3s"
          variant="gull"
        />
        <SkyBird
          wrap="absolute left-[60%] bottom-[28%]"
          bird="w-7 text-fg/32"
          duration="8.5s"
          delay="-6s"
        />
        <SkyBird
          wrap="absolute left-[18%] bottom-[22%]"
          bird="w-4 text-fg/20"
          duration="13s"
          delay="-7s"
        />
      </div>

      <div className="sky-ocean absolute inset-x-0 bottom-0 h-44">
        <div className="ocean-wave absolute inset-x-0 bottom-24 h-10 opacity-22" style={{ animationDuration: '28s' }}>
          <Wave className="h-full w-[200%]" />
        </div>
        <div className="ocean-wave absolute inset-x-0 bottom-16 h-12 opacity-35" style={{ animationDuration: '22s' }}>
          <Wave className="h-full w-[200%]" />
        </div>
        <div
          className="ocean-wave-alt absolute inset-x-0 bottom-9 h-14 opacity-45"
          style={{ animationDuration: '16s', animationDelay: '-4s' }}
        >
          <Wave className="h-full w-[200%]" />
        </div>
        <div className="ocean-wave absolute inset-x-0 bottom-2 h-16 opacity-60" style={{ animationDuration: '11s' }}>
          <Wave className="h-full w-[200%]" />
        </div>
      </div>
    </div>
  );
}
