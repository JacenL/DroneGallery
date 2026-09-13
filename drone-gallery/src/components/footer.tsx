export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-[2] bg-[#d4bc86] dark:bg-[#1f3026]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 text-sm text-[#4a3c28] sm:px-8 dark:text-[#c5d0c8]">
        <span>Shot on a DJI Mini 4K / Mini 3</span>
        <span>© {new Date().getFullYear()} Drone Gallery</span>
      </div>
    </footer>
  );
}
