'use client';

import { MotionConfig } from 'framer-motion';

// Respecte le réglage système "réduire les animations" (WCAG 2.3.3) :
// framer-motion désactive alors ses transformations animées.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
