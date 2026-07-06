import type { CSSProperties } from "react";
/** Prop types for the vendored React Bits PrismaticBurst background. */
export interface PrismaticBurstProps {
  intensity?: number;
  speed?: number;
  animationType?: "rotate" | "rotate3d" | "hover";
  colors?: string[];
  distort?: number;
  paused?: boolean;
  offset?: { x?: number | string; y?: number | string };
  hoverDampness?: number;
  rayCount?: number;
  mixBlendMode?: CSSProperties["mixBlendMode"];
}
declare const PrismaticBurst: (props: PrismaticBurstProps) => React.JSX.Element;
export default PrismaticBurst;
