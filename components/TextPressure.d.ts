import type { ElementType } from "react";

/** Prop types for the vendored React Bits TextPressure component. */
export interface TextPressureProps {
  text?: string;
  as?: ElementType;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  className?: string;
  minFontSize?: number;
}

declare const TextPressure: (props: TextPressureProps) => React.JSX.Element;

export default TextPressure;
