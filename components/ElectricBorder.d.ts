import type { CSSProperties, ReactNode } from "react";
/** Prop types for the vendored React Bits ElectricBorder wrapper. */
export interface ElectricBorderProps {
  children?: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: CSSProperties;
}
declare const ElectricBorder: (props: ElectricBorderProps) => React.JSX.Element;
export default ElectricBorder;
