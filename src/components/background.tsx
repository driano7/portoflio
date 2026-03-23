'use client';

import Particles from '@/components/particles';

export function Background() {
  return (
    <Particles
      className="fixed inset-0 -z-10 animate-fade-in"
      quantity={115}
      accentRatio={0.2}
      accentColor="167, 139, 250"
    />
  );
}
