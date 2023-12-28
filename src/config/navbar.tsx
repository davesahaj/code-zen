import { GoHome } from 'react-icons/go';
import { FiSettings, FiList, FiSave } from 'react-icons/fi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { NavBarType } from '@/types';
import { GoDotFill } from 'react-icons/go';

export const navbar: NavBarType = [
  { icon: GoHome, label: 'Home', url: '/' },
  { icon: AiOutlineDashboard, label: 'Progress', url: '/progress' },
  {
    icon: FiList,
    label: 'Curated Lists',
    url: '/lists',
    type: 'dropdown',
    children: [
      {
        icon: GoDotFill,
        label: 'NeetCode 150',
        url: '/lists/neetcode'
      },
      {
        icon: GoDotFill,
        label: `Striver's SDE Sheet`,
        url: '/lists/striver'
      },
      {
        icon: GoDotFill,
        label: 'Love Babbar',
        url: '/lists/babbar'
      }
    ]
  },
  { icon: FiSave, label: 'Collections', url: '/saved' },
  { icon: FiSettings, label: 'Settings', url: '/settings' }
];
