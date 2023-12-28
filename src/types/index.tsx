import { IconType } from 'react-icons';

export type NavLinkType = {
  icon: IconType;
  label: string;
  url: string;
  type?: 'default' | 'dropdown';
  children?: NavLinkType[];
};

export type NavBarType = NavLinkType[];
