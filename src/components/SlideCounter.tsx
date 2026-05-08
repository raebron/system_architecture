'use client';

export default function SlideCounter({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="fixed top-4 left-4 z-50 font-retro text-[10px] text-neon-cyan/70">
      {current + 1} / {total}
    </div>
  );
}
