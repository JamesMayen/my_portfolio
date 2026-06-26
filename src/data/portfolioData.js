// ============================================================================
// PORTFOLIO DATA
// Edit this file to update site content. Components read from here so you
// rarely need to touch component code to change copy, links, or items.
// ============================================================================

export const profile = {
  name: 'James Mayen',
  initials: 'JM',
  roles: [
    'Cybersecurity Enthusiast',
    'AI and Machine Learning',
    'Software Engineer',
    'MERN Stack Developer',
    'Youth Digital Transformation Advocate',
    'ITU Youth Envoy',
    'Technology Innovator',
    'DTA_RLC EA Alumni',
    'Network Security',
  ],
  location: 'Juba, South Sudan',
  email: 'mayenjames15@gmail.com',
  phone: '+211924787131',
  tagline:
    'I build technology solutions that empower communities, strengthen digital resilience, and enable youth-led innovation across South Sudan and the region.',
  // Replace with a real headshot at /src/assets/images/portrait.jpg
  portraitSrc: '/images/Jz.jpg',
  // Replace with a real PDF at /src/assets/files/james-mayen-cv.pdf
  cvSrc: '/assets/My-cv/james-mayen-cv.pdf',
  social: {
    github: 'https://github.com/jamesmayen',
    linkedin: 'https://www.linkedin.com/in/james-mayen-ab7540253?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    twitter: 'https://x.com/TungstenJz',
    email: 'mailto:mayenjames15@gmail.com',
  },
};

export const stats = [
  { id: 'projects', label: 'Projects Completed', value: 8, suffix: '+' },
  { id: 'certs', label: 'Certifications Earned', value: 6, suffix: '+' },
  { id: 'events', label: 'Events & Summits Attended', value: 12, suffix: '+' },
  { id: 'years', label: 'Years Learning Tech', value: 4, suffix: '+' },
];

export const about = {
  story: [
    'I\u2019m a graduate of Information Technology from the University of Juba, where I split my attention between two things that turned out to be the same thing: building software and learning how to break it safely, before someone with worse intentions does it for real.',
    'That curiosity started with networking and database coursework, grew into hands-on practice with tools like Nmap and Metasploit, and was sharpened through formal cybersecurity and incident-handling training with SafetyComm. Somewhere in that process I stopped seeing security as a specialty bolted onto software, and started seeing it as the actual job.',
    'Outside the lab, I represent youth voices in global digital policy as an ITU Generation Connect Youth Envoy for Africa, because the systems we\u2019re all racing to build need to work for the people most often left out of the room when they\u2019re designed.',
  ],
  mission:
    'My mission is to help close South Sudan\u2019s digital security gap \u2014 by building practical tools, training the next group of young technologists, and making sure offensive security expertise isn\u2019t something the region has to import.',
};

export const skillCategories = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    skills: [
      { name: 'Nmap', level: 75 },
      { name: 'Metasploit', level: 60 },
      { name: 'Vulnerability Assessment', level: 65 },
      { name: 'Incident Handling', level: 70 },
      { name: 'Security Awareness', level: 85 },
    ],
  },
  {
    id: 'webdev',
    title: 'Web & Software Development',
    skills: [
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'PHP', level: 70 },
      { name: 'MySQL', level: 75 },
      { name: 'Node.js', level: 65 },
      { name: 'MongoDB', level: 75 },
      { name: 'Express.js', level: 65 },
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    skills: [
      { name: 'Network Fundamentals', level: 80 },
      { name: 'Troubleshooting', level: 75 },
      { name: 'Infrastructure Concepts', level: 65 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 70 },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    skills: [
      { name: 'Leadership', level: 85 },
      { name: 'Public Speaking', level: 80 },
      { name: 'Project Management', level: 70 },
      { name: 'Team Collaboration', level: 90 },
    ],
  },
];

export const experience = [
  {
    id: 'safetycomm',
    org: 'SafetyComm South Sudan',
    role: 'Cybersecurity & Incident Handling',
    period: '2023',
    description:
      'Completed structured training in incident response workflows, threat identification, and security best practices, while assisting with real awareness initiatives for local organizations.',
    tags: ['Incident Handling', 'Security Training'],
  },
  {
    id: 'eden',
    org: 'Eden Technology',
    role: 'Database & Networking Support',
    period: '2023 \u2013 2024',
    description:
      'Worked on database management tasks and networking support, building practical experience in infrastructure that underpins secure, reliable systems.',
    tags: ['Databases', 'Networking'],
  },
  {
    id: 'gdsc',
    org: 'Google Developer Student Clubs (GDSC)',
    role: 'Core Team Member & Community Mobilizer',
    period: '2022 \u2013 2025',
    description:
      'Organized developer workshops and community events at the University of Juba, mobilizing students around practical software and web development skills.',
    tags: ['Community', 'Workshops'],
  },
  {
    id: 'mgurush',
    org: 'M-Gurush',
    role: 'Brand Ambassador',
    period: '2022 \u2013 2023',
    description:
      'Represented and promoted M-Gurush\u2019s digital financial services around Juba and community networks, supporting digital adoption efforts.',
    tags: ['Digital Adoption', 'Outreach'],
  },
];

export const projects = [
  {
    id: 'eduaccess',
    title: 'EduAccess',
    description:
      'A USSD-based educational platform that lets students reach academic resources and check results from any mobile phone \u2014 no smartphone or data connection required.',
    technologies: ['USSD', "Africa's Talking", 'Backend Integration'],
    github: 'https://github.com/jamesmayen/eduaccess',
    demo: null,
    image: '/images/AI.png',
  },
  {
    id: 'hospital-booking',
    title: 'Hospital Booking System',
    description:
      'An appointment management system where patients book visits, doctors manage their schedules, and administrators oversee operations from one dashboard.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'SMS Integration'],
    github: 'https://github.com/jamesmayen/hospital-booking',
    demo: null,
    image: '/images/D-S.jpg',
  },
  {
    id: 'ai-social-impact',
    title: 'AI for Social Impact',
    description:
      'A series of applied-AI explorations aimed at South Sudan\u2019s on-the-ground challenges \u2014 from resource access to information delivery in low-connectivity areas.',
    technologies: ['Python', 'Machine Learning', 'Applied AI'],
    github: 'https://github.com/jamesmayen',
    demo: null,
    image: '/images/AI.png',
  },
];

export const leadership = [
  {
    id: 'gcye',
    title: 'ITU Generation Connect Youth Envoy',
    scope: 'Africa Region (South Sudan)',
    description:
      'Representing African youth perspectives in global digital policy conversations led by the International Telecommunication Union.',
  },
  {
    id: 'gys',
    title: 'ITU Global Youth Summit',
    scope: 'Participant',
    description:
      'Spoke on youth-driven digital transformation and the role young technologists play in closing connectivity and skills gaps.',
  },
  {
    id: 'consultations',
    title: 'Regional Youth Consultations',
    scope: 'Participant & Contributor',
    description:
      'Contributed to consultations shaping youth-inclusive digital policy recommendations across the region.',
  },
  {
    id: 'inclusion',
    title: 'Digital Inclusion Advocacy',
    scope: 'Ongoing',
    description:
      'Advocating for equitable access to digital infrastructure and education, particularly across South Sudan and the wider region.',
  },
];

export const certifications = [
  {
    id: 'cert-1',
    title: 'Cybersecurity Fundamentals',
    issuer: 'SafetyComm South Sudan',
    date: '2024',
    fileSrc: null,
  },
  {
    id: 'cert-2',
    title: 'Incident Handling Training',
    issuer: 'SafetyComm South Sudan',
    date: '2024',
    fileSrc: null,
  },
  {
    id: 'cert-3',
    title: 'Networking Essentials',
    issuer: 'Networking Academy',
    date: '2023',
    fileSrc: null,
  },
  {
    id: 'cert-4',
    title: 'Technology Innovation Workshop',
    issuer: 'GDSC University of Juba',
    date: '2023',
    fileSrc: null,
  },
  {
    id: 'cert-5',
    title: 'MERN Stack Developer',
    issuer: 'PLP Academy',
    date: '2025',
    fileSrc: null,
  },
  {
    id: 'cert-6',
    title: 'Digital Transformation Leadership',
    issuer: 'RLC East Africa',
    date: '2025',
    fileSrc: null,
  },
  {
    id: 'cert-7',
    title: 'Microsoft Azure AI Foundry',
    issuer: 'Microsoft',
    date: '2025',
    fileSrc: null,
  },
  {
    id: 'cert-8',
    title: 'AI and Machine Learning Certified',
    issuer: 'Ottermans Institute',
    date: '2025',
    fileSrc: null,
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
