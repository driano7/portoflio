'use client';

import Particles from '@/components/particles';

export function Background() {
  return <Particles className="fixed inset-0 -z-10 animate-fade-in" quantity={100} />;
}
