import type { CSSProperties, ReactNode } from "react";

/** Prop types for the vendored React Bits GradualBlur component. */
export interface GradualBlurProps {
  position?: "top" | "bottom" | "left" | "right";
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
  opacity?: number;
  animated?: boolean | "scroll";
  duration?: string;
  easing?: string;
  hoverIntensity?: number;
  target?: "parent" | "page";
  preset?: string;
  responsive?: boolean;
  zIndex?: number;
  onAnimationComplete?: () => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

declare const GradualBlur: React.MemoExoticComponent<
  (props: GradualBlurProps) => React.JSX.Element
>;

export default GradualBlur;
