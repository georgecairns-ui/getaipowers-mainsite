/** Prop types for the vendored React Bits StaggeredMenu component. */
export interface StaggeredMenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}
export declare const StaggeredMenu: (props: StaggeredMenuProps) => React.JSX.Element;
declare const _default: (props: StaggeredMenuProps) => React.JSX.Element;
export default _default;
