import { BadgeVariant } from './Badge.types';

export function getBadgeText(variant: BadgeVariant) {
  switch (variant) {
    case 'tailwind':
      return 'Tailwind CSS';
    case 'storybook':
      return 'Storybook';
    case 'styledComponents':
      return 'Styled Components';
    case 'javascript':
      return 'Javascript';
    case 'next':
      return 'Next.js 15';
    default:
      return 'Typescript';
  }
}
