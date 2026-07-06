/** Prop types for the vendored React Bits ColorBends background. */
export interface ColorBendsProps {
  rotation?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
  iterations?: number;
  intensity?: number;
  bandWidth?: number;
  className?: string;
}
declare const ColorBends: (props: ColorBendsProps) => React.JSX.Element;
export default ColorBends;
