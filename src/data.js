// ============================================================
//  All of your portfolio content lives here — edit away.
// ============================================================

export const profile = {
  name: 'Shaharyar',
  role: 'Full-stack Developer',
  headline: 'I build ERPs, platforms and web apps that actually run your',
  highlight: 'business.',
  location: 'Karachi, Pakistan',
  timezone: 'Asia/Karachi', // used for the "my local time" clock in the footer
  available: true, // shows the green "available for work" pill
  availabilityText: 'Available for new projects',
  email: 'shery.codes@gmail.com',
  // leave any of these empty ('') to hide that icon
  github: 'https://github.com/shaharyarhq',
  // x: 'https://x.com/ShaharyarA22538',
  linkedin: 'https://linkedin.com/in/shaharyarhq',
  // the four things pinned around your name in the hero
  pins: {
    topLeft: 'Laravel',
    topRight: 'Filament',
    bottomLeft: 'Full-stack Developer',
    bottomRight: 'Builds ERPs & platforms',
  },
};

export const clientProjects = [
  { name: 'Hassan', project: 'Retail operations software and manufacturing ERP', tone: 'yellow' },
  { name: 'Ashar', project: 'BMS software', tone: 'mint' },
  { name: 'Zain', project: 'Qaabil learning platform', tone: 'pink' },
  { name: 'Osama Khan Niyazi', project: 'munnasupplements.com', tone: 'blue' },
];

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Clients', href: '#clients' },
];

export const services = [
  {
    title: 'ERP & Business Systems',
    tone: 'yellow',
    icon: 'cart',
    features: [
      'Inventory, sales, purchases & production',
      'Multi-outlet, multi-warehouse stock',
      'Ledgers, accounts, expenses & payroll',
      'Roles & permissions for every staff member',
      'Excel imports, PDF invoices & reports',
    ],
  },
  {
    title: 'Web Platforms & Portals',
    tone: 'mint',
    icon: 'code',
    features: [
      'LMS, CRM, job boards & member portals',
      'Separate panels for each type of user',
      'Approval workflows & notifications',
      'Google / GitHub login',
      'Video uploads & streaming',
    ],
  },
  {
    title: 'Business Websites',
    tone: 'pink',
    icon: 'monitor',
    features: [
      'Custom design that fits your brand',
      'Responsive on every screen size',
      'Every page editable from an admin panel',
      'Contact forms & WhatsApp links',
      'On-page SEO baked in',
    ],
  },
];

// `link`: leave empty ('') to hide the "View project" link.
// `slug`: if caseStudies.js has an entry for it, the card opens that detail page instead.
// `image`: put a screenshot in /public (e.g. /projects/taskboard.png).
// Leave it empty to show the drawn placeholder (`mock`: board | shop | cal).
export const projects = [
  {
    slug: 'retail-erp', // has a detail page in caseStudies.js
    title: 'Multi-Outlet Retail ERP',
    kind: 'ERP / Wholesale & Retail',
    tone: 'blue',
    description:
      'A live online system for a tailoring-materials wholesaler to manage daily sales, accounts and multiple outlets: stock transfers from factory to shops, sales and purchases with returns, customer and supplier ledgers, cash and bank accounts, expenses, role-based staff access and filterable sales reports with ledger exports.',
    tags: ['Laravel', 'Filament', 'Livewire'],
    link: '',
    image: '/projects/retail-erp/sales-report.jpg',
    mock: 'board',
  },
  {
    slug: 'manufacturing-erp',
    title: 'Thread Manufacturing ERP',
    kind: 'ERP / Manufacturing',
    tone: 'ink',
    description:
      'A live on-site ERP that manages factory operations for a thread manufacturer: bills of materials, production plans and runs for winding, spooling and packing, outsourced dyeing, purchase orders and goods receipts across warehouses, a running inventory ledger with stock valuation, dispatches, payroll and staff advances.',
    tags: ['Laravel', 'Filament v5', 'Livewire'],
    link: '',
    image: '/projects/manufacturing-erp/inventory-ledger.jpg',
    mock: 'shop',
  },
  {
    slug: 'qaabil',
    title: 'Qaabil',
    kind: 'EdTech / Learning Platform',
    tone: 'yellow',
    description:
      'A learning platform for Cambridge IGCSE and A-Level students where knowledge is free if you contribute: students upload teaching videos, moderators approve them, and an approved video unlocks every course for 30 days. Timed quizzes, progress tracking, badges, a teacher quiz builder that exports PDF papers, and a CMS for the whole public site.',
    tags: ['Laravel', 'Filament', 'Livewire'],
    link: 'https://qaabil.io',
    image: '/projects/qaabil/course-detail.jpg',
    mock: 'cal',
  },
];

export const stack = [
  {
    title: 'Laravel & Filament',
    path: '~/backend',
    freq: 'daily',
    tone: 'yellow',
    blurb: 'Where I live: Laravel 12 apps with Filament v4/v5 admin panels.',
    items: ['PHP 8', 'Laravel', 'Filament', 'Livewire', 'Eloquent', 'Blade', 'Sanctum APIs'],
  },
  {
    title: 'Business Features',
    path: '~/features',
    freq: 'daily',
    tone: 'mint',
    blurb: 'The parts every real business system needs, done properly.',
    items: ['Roles & permissions', 'Activity logs', 'Excel import/export', 'PDF reports', 'Approval workflows', 'Backups', 'OAuth login'],
  },
  {
    title: 'Frontend & Beyond',
    path: '~/frontend',
    freq: 'weekly',
    tone: 'pink',
    blurb: 'Clean interfaces, plus the tools I reach for outside PHP.',
    items: ['Tailwind CSS', 'JavaScript', 'Vue', 'React + Inertia', 'Vite', 'Node / Express', 'Flutter', 'Git'],
  },
];

// words scrolling across the tape strip under the hero
export const marquee = ['Laravel', 'Filament', 'Livewire', 'PHP', 'ERP Systems', 'Tailwind CSS', 'Roles & Permissions', 'Excel Imports', 'PDF Reports', 'Vue', 'React', 'Flutter'];

export const stats = [
  { value: projects.length, label: ' featured case studies' },
  { value: 4, label: ' signed-in panels in Qaabil' },
  { value: 30, label: ' days of access per approved video' },
];

export const contactSteps = [
  'I read your message and get what you need',
  'I reply within 24h with questions or a proposal',
  'Quick call to align on scope & timeline',
  'We start building 🚀',
];
