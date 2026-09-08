import { getBadgeText } from './Badge/Badge.helpers';
import type { BadgeVariant } from './Badge/Badge.types';

const variantClasses: Record<BadgeVariant, string> = {
  tailwind: 'bg-[#18c2b8] text-white',
  storybook: 'bg-[#ff4785] text-white',
  styledComponents: 'bg-[#eaaa61] text-white',
  javascript: 'bg-[#e8d44d] text-black',
  next: 'bg-[#0d1017] text-white',
};

interface BadgeProps {
  variant: BadgeVariant;
}

const Badge = ({ variant }: BadgeProps) => {
  return (
    <div
      className={`absolute -right-1 top-2 rounded px-2 py-0.5 shadow-md ${variantClasses[variant]}`}
    >
      {getBadgeText(variant)}
    </div>
  );
};

export default Badge;
