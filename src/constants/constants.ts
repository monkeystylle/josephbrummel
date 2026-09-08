import HtmlLogo from '../../public/assets/logo/html-logo.png';
import HtmlLogo2 from '../../public/assets/logo/html-logo2.png';
import CssLogo from '../../public/assets/logo/css-logo.png';
import CssLogo2 from '../../public/assets/logo/css-logo2.png';
import JsLogo from '../../public/assets/logo/js-logo.png';
import JsLogo2 from '../../public/assets/logo/js-logo2.png';
import ReactLogo from '../../public/assets/logo/react-logo.png';
import ReactLogo2 from '../../public/assets/logo/react-logo2.png';
import TsLogo from '../../public/assets/logo/ts-logo.png';
import TsLogo2 from '../../public/assets/logo/ts-logo2.png';
import ScLogo from '../../public/assets/logo/sc-logo.png';
import ScLogo2 from '../../public/assets/logo/sc-logo2.png';
import NextLogo from '../../public/assets/logo/next-logo.png';
import NextLogo2 from '../../public/assets/logo/next-logo2.png';
import TailwindLogo from '../../public/assets/logo/tailwind-logo.png';
import StorybookLogo from '../../public/assets/logo/storybook-logo.png';

//Projects
import Arch from '../../public/assets/project-image/arch.png';
import Tictactoe from '../../public/assets/project-image/tictactoe.png';
import QuizApp from '../../public/assets/project-image/quiz.png';
import News from '../../public/assets/project-image/news.png';
import ResponsiveTailwind from '../../public/assets/project-image/responsive-tailwind.png';
import DatePicker from '../../public/assets/project-image/datepicker.png';
import Storybook from '../../public/assets/project-image/storybook.png';
import TaskTracker from '../../public/assets/project-image/task-tracker.png';
import SwapSpace from '../../public/assets/project-image/swap-space.png';

import { BadgeVariant } from '@/components/Badge/Badge.types';
import { StaticImageData } from 'next/image';

interface Project {
  id: number;
  name: string;
  image: StaticImageData;
  readMoreLink: string;
  siteLink: string;
  githubLink: string;
  subtitle: string | string[];
  withBadge: boolean;
  badgeVariant: BadgeVariant;
  showGithubLink: boolean;
}

export const LOGOS = [
  {
    id: 1,
    name: 'Javascript',
    image1: JsLogo,
    image2: JsLogo2,
  },
  {
    id: 2,
    name: 'React',
    image1: ReactLogo,
    image2: ReactLogo2,
  },

  {
    id: 3,
    name: 'Typescript',
    image1: TsLogo,
    image2: TsLogo2,
  },

  {
    id: 4,
    name: 'Next.js',
    image1: NextLogo,
    image2: NextLogo2,
  },
  {
    id: 5,
    name: 'Styled Components',
    image1: ScLogo,
    image2: ScLogo2,
  },
  {
    id: 6,
    name: 'Tailwind Css',
    image1: TailwindLogo,
    image2: TailwindLogo,
  },
  {
    id: 5,
    name: 'Storybook',
    image1: StorybookLogo,
    image2: StorybookLogo,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Swap Space',
    image: SwapSpace,
    readMoreLink: '/project/tictactoe',
    siteLink: 'https://www.swap-space-app.com/',
    githubLink: 'https://github.com/monkeystylle/swap-space',
    subtitle: 'Marketplace platform for Bartering items and services.',
    withBadge: true,
    badgeVariant: 'next',
    showGithubLink: true,
  },
  {
    id: 2,
    name: 'Component Library ',
    image: Storybook,
    readMoreLink: '/project/tictactoe',
    siteLink:
      ' https://monkeystylle.github.io/storybook-mini-component-library/',
    githubLink:
      'https://github.com/monkeystylle/storybook-mini-component-library',
    subtitle:
      'Custom React components built from scratch, documented and tested in Storybook',
    withBadge: true,
    badgeVariant: 'storybook',
    showGithubLink: true,
  },
  {
    id: 3,
    name: 'Sample Tailwind Site',
    image: ResponsiveTailwind,
    readMoreLink: '/project/tictactoe',
    siteLink: 'https://sample-tailwind-site.vercel.app/',
    githubLink: 'https://github.com/porungbandeng86/sample-tailwind-site',
    subtitle: 'Mobile-first Next.js site styled with Tailwind CSS',
    withBadge: true,
    badgeVariant: 'tailwind',
    showGithubLink: true,
  },
  {
    id: 4,
    name: 'Business Site',
    image: Arch,
    readMoreLink: '/project/arch',
    siteLink: 'https://arch-mauve.vercel.app/',
    githubLink: 'https://github.com/monkeystylle/arch',
    subtitle: 'Desktop first Corporate Website styled with Style Components',
    withBadge: true,
    badgeVariant: 'styledComponents',
    showGithubLink: true,
  },
  {
    id: 5,
    name: 'News Page',
    image: News,
    readMoreLink: '/project/tictactoe',
    siteLink: 'https://responsive-news-site.vercel.app/',
    githubLink: 'https://github.com/porungbandeng86/responsive-news-site',
    subtitle: 'A News portal with a responsive layout design',
    withBadge: false,
    badgeVariant: 'javascript',
    showGithubLink: true,
  },

  {
    id: 6,
    name: 'Tic Tac Toe',
    image: Tictactoe,
    readMoreLink: '/project/tictactoe',
    siteLink: 'https://tic-tac-toe-pi-blue.vercel.app/',
    githubLink: 'https://github.com/porungbandeng86/tic-tac-toe',
    subtitle: 'Minimalist React + TypeScript game with animation.',
    withBadge: false,
    badgeVariant: 'styledComponents',
    showGithubLink: true,
  },

  {
    id: 7,
    name: 'Date Picker Widget',
    image: DatePicker,
    readMoreLink: '/project/tictactoe',
    siteLink: 'https://josephbayangos.vercel.app/project/calendar',
    githubLink: 'https://github.com/porungbandeng86/responsive-news-site',
    subtitle:
      'Reusable Datepicker for selecting year, month, day. Developed using Luxon - a library for dealing with dates and time ',
    withBadge: false,
    badgeVariant: 'styledComponents',
    showGithubLink: false,
  },

  //   {
  //   id: 1,
  //   name: 'Task Tracker',
  //   image: TaskTracker,
  //   readMoreLink: '/project/tictactoe',
  //   siteLink: 'https://task-tracker-zeta-mocha.vercel.app/',
  //   githubLink: 'https://github.com/monkeystylle/task-tracker',
  //   subtitle: [
  //     'Guest Login',
  //     'email: guest@gmail.com',
  //     'password: user1234'
  //   ],
  //   withBadge: true,
  //   badgeVariant: 'next',
  //   showGithubLink: true,
  // },
];

// BREAKPOINT

export const BREAKPOINTS = {
  phone: 550,
  tablet: 1100,
  laptop: 1500,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
