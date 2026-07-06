import type { HTMLAttributes } from "react";

/** Prop types for the React Bits DotField canvas component (DotField.jsx). */
export interface DotFieldProps extends HTMLAttributes<HTMLDivElement> {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
}

declare const DotField: React.MemoExoticComponent<
  (props: DotFieldProps) => React.JSX.Element
>;

export default DotField;
