// Source: screen_pod.dart

'use client';

import { useState, useEffect } from 'react';

export type ScreenSizeClass = 'phone' | 'tablet' | 'desktop';

const breakpoints = {
  phone: 0,
  tablet: 768,
  desktop: 1100,
};

export function useScreenClass(): ScreenSizeClass {
  const [screenClass, setScreenClass] = useState<ScreenSizeClass>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.desktop) {
        setScreenClass('desktop');
      } else if (width >= breakpoints.tablet) {
        setScreenClass('tablet');
      } else {
        setScreenClass('phone');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenClass;
}
