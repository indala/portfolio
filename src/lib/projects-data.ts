import { Project } from '@/types/types';

export const featuredProjects: Project[] = [
  {
    id: 'ijitest',
    title: 'IJITEST – Academic Journal Management Platform',
    description: 'A modern academic journal publishing and review management platform designed for quick manuscript submission, peer evaluation, and archive curation.',
    liveUrl: 'https://ijitest.org',
    techStack: ['React', 'Next.js', 'Express', 'MySql', 'Nest.js', 'Tailwind CSS'],
    imageUrl: '/ijitest.png',
  },
  {
    id: 'sreshta-semicon',
    title: 'Sreshta Semicon Technologies',
    description: 'Official corporate website for a semiconductor design and consulting firm, showcasing interactive service catalogues and engineering portfolios.',
    liveUrl: 'https://sreshtasemicon.com',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'sainivas-beachview',
    title: 'Sai Nivas Beach View Rest House',
    description: 'Resort reservation system presenting seaside room catalogs, visual booking dashboards, and dynamic reservation managers.',
    liveUrl: 'https://sainivas.co.in',
    techStack: ['React', 'Next.js', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'vignan-trees',
    title: 'Vignan Trees',
    description: 'An interactive ecosystem tracking platform built to index, geolocate, and detail diverse tree species across campus gardens.',
    liveUrl: 'https://vignantrees.vercel.app',
    techStack: ['React', 'Tailwind CSS', 'Leaflet Maps', 'Express'],
  },
  {
    id: 'bingo',
    title: 'Bingo Party Duo',
    description: 'A real-time multiplayer board game built with active web socket links, private host lobby creation, and sound effect integrations.',
    liveUrl: 'https://bingopartyduo.vercel.app',
    techStack: ['Next.js', 'Tailwind CSS', 'Socket.io', 'Node.js'],
  },
  {
    id: 'yours-task',
    title: 'Yours Task',
    description: 'A responsive visual dashboard providing drag-and-drop task lanes, subtask milestones, and local storage state persistence.',
    liveUrl: 'https://indala.github.io/Your_Tasks/',
    githubUrl: 'https://github.com/indala/Your_Tasks',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'calendar-app',
    title: 'Scheduler Calendar App',
    description: 'A customizable daily planner displaying event logs, task schedule timelines, recurring timers, and active color categorization.',
    liveUrl: 'https://indala.github.io/calendar-app/',
    githubUrl: 'https://github.com/indala/calendar-app',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Date-fns'],
  },
];
