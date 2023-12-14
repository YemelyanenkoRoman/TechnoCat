import dynamic from "next/dynamic";

export const SliderCenterMode = dynamic(() => import("./SliderCenterMode"), {
  ssr: false,
});
