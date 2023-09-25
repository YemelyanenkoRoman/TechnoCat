import { useEffect, useLayoutEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(() => {
    return typeof window === 'undefined' ? 1500 : window.innerWidth;
  });

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const updateWidth = () => {
        setWidth(window.innerWidth);
      };

      updateWidth();

      window.addEventListener('resize', updateWidth);

      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }
  }, []);

  return width;
};
