import { headers } from "next/dist/client/components/headers";
import { useEffect, useLayoutEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(() => {
    if (typeof window === "undefined") {
      const headersList = headers();
      const userAgent = headersList.get("user-agent");
      const isMobileView = !!userAgent?.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      );

      return isMobileView ? 0 : 2000;
    }

    return window.innerWidth;
  });

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const updateWidth = () => {
        setWidth(window.innerWidth);
      };

      updateWidth();

      window.addEventListener("resize", updateWidth);

      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }
  }, []);

  return width;
};
