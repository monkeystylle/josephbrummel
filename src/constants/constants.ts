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

import { StaticImageData } from 'next/image';

interface Project {
  id: number;
  name: string;
  image: StaticImageData;
  siteLink: string;
  githubLink?: string; // optional: leave it out and the Code pill hides
  description: string;
  stack: string[]; // shown in this order, joined with " · "
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
    siteLink: 'https://swap-space.josephbrummel.com/',
    githubLink: 'https://github.com/monkeystylle/swap-space',
    description: 'A marketplace for bartering items and services.',
    stack: ['Next.js 15', 'Prisma', 'Tailwind'],
  },
  {
    id: 2,
    name: 'Component Library',
    image: Storybook,
    siteLink:
      'https://monkeystylle.github.io/storybook-mini-component-library/',
    githubLink:
      'https://github.com/monkeystylle/storybook-mini-component-library',
    description:
      'Custom React components built from scratch, documented and tested in Storybook.',
    stack: ['React', 'Storybook'],
  },
  {
    id: 3,
    name: 'Sample Tailwind Site',
    image: ResponsiveTailwind,
    siteLink: 'https://sample-tailwind-site.vercel.app/',
    githubLink: 'https://github.com/porungbandeng86/sample-tailwind-site',
    description: 'A mobile-first Next.js site styled with Tailwind CSS.',
    stack: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: 4,
    name: 'Business Site',
    image: Arch,
    siteLink: 'https://arch-mauve.vercel.app/',
    githubLink: 'https://github.com/monkeystylle/arch',
    description:
      'A desktop-first corporate website styled with styled-components.',
    stack: ['React', 'styled-components'],
  },
  {
    id: 5,
    name: 'News Page',
    image: News,
    siteLink: 'https://responsive-news-site.vercel.app/',
    githubLink: 'https://github.com/porungbandeng86/responsive-news-site',
    description: 'A news portal with a responsive layout.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    name: 'Tic Tac Toe',
    image: Tictactoe,
    siteLink: 'https://tic-tac-toe-pi-blue.vercel.app/',
    githubLink: 'https://github.com/porungbandeng86/tic-tac-toe',
    description: 'A minimalist React + TypeScript game with animation.',
    stack: ['React', 'TypeScript'],
  },
  {
    id: 7,
    name: 'Date Picker Widget',
    image: DatePicker,
    siteLink: 'https://josephbayangos.vercel.app/project/calendar',
    // no githubLink: the old one pointed at the news site repo
    description:
      'A reusable date picker for selecting a year, month, and day, built with Luxon.',
    stack: ['React', 'Luxon'],
  },

  // {
  //   id: 8,
  //   name: 'Task Tracker',
  //   image: TaskTracker,
  //   siteLink: 'https://task-tracker-zeta-mocha.vercel.app/',
  //   githubLink: 'https://github.com/monkeystylle/task-tracker',
  //   description: 'Guest login: guest@gmail.com / user1234',
  //   stack: ['Next.js'],
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

// NAVBAR
//
// Each entry below becomes one menu item, rendered in BOTH the desktop bar
// and the tablet/mobile hamburger panel. There is no second list to update.
//
// Every entry has exactly two slots:
//   name -> the text the visitor reads
//   href -> where it goes when clicked
//
// While this array is empty, the hamburger is hidden entirely on tablet and
// mobile, because there would be nothing behind it to open. Add your first
// entry and it appears automatically.
//
// The panel also prepends its own "Home" item, so you do NOT need to add one
// here -- doing so would show Home twice on mobile.

export interface NavLink {
  name: string;
  href: string;
}

// This is what a populated menu looks like. To use it, delete the empty array
// below and uncomment this one (select the block and press Ctrl+/).
//
// export const NAV_LINKS: NavLink[] = [
//   // Jumps to a section on the current page. The href after "#" must match an
//   // id on that section, so this one needs <section id="skills"> in
//   // TechAndTools.tsx. Without the id, the link does nothing.
//   { name: 'Skills', href: '/#skills' },
//
//   // Same idea, pointing at SampleSection.tsx -> <section id="projects">
//   { name: 'Projects', href: '/#projects' },
//
//   // Goes to a separate page. Requires that route to exist first, as
//   // src/app/about/page.tsx -- otherwise it 404s.
//   { name: 'About', href: '/about' },
//
//   // An external URL works too.
//   { name: 'Resume', href: 'https://example.com/resume.pdf' },
// ];

// Empty for now -- hamburger stays hidden until this has at least one entry.
export const NAV_LINKS: NavLink[] = [];
