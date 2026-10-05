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
  // Cover Image
  portraitSrc: '/images/Jz.jpg',
  // Personal Resume/Cv
  cvSrc: '/assets/My-cv/James Mayen - Cv.pdf',
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
    'I’m a graduate of Information Technology from the University of Juba, where I split my attention between two things that turned out to be the same thing: building software and learning how to break it safely, before someone with worse intentions does it for real.',
    'That curiosity started with networking and database coursework, grew into hands-on practice with tools like Nmap and Metasploit, and was sharpened through formal cybersecurity and incident-handling training with SafetyComm. Somewhere in the process I stopped seeing security as a specialty bolted onto software, and started seeing it as the actual job.',
    'Outside the lab, I represent youth voices in global digital policy as an ITU Generation Connect Youth Envoy for Africa, because the systems we’re all racing to build need to work for the people most often left out of the room when they’re designed.',
  ],
  mission:
    'My mission is to help close South Sudan’s digital security gap — by building practical tools, training the next group of young technologists, and making sure offensive security expertise isn’t something the region has to import.',
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
    id: 'itu-gcye',
    org: 'International Telecommunication Union (ITU)',
    role: 'Generation Connect Youth Envoy — Africa / South Sudan',
    period: '2024 – 2026',
    description:
      'Served as a Generation Connect Youth Envoy representing South Sudan and contributing to youth-focused digital development and technology initiatives. Participated in international youth engagement activities and contributed perspectives on digital inclusion, technology, innovation, and meaningful youth participation in the digital transformation agenda.',
    tags: ['Youth Leadership', 'Digital Inclusion', 'Advocacy', 'Public Speaking', 'International Engagement', 'Technology and Innovation', 'Community Engagement'],
  },
  {
    id: 'safetycomm',
    org: 'SafetyComm South Sudan',
    role: 'Cybersecurity & Incident Handling',
    period: '2024',
    description:
      'Completed structured training in incident response workflows, threat identification, and security best practices, while assisting with real awareness initiatives for local organizations.',
    tags: ['Incident Handling', 'Security Training'],
  },
  {
    id: 'eden',
    org: 'Eden Technology',
    role: 'Database & Networking Support',
    period: '2023 – 2024',
    description:
      'Worked on database management tasks and networking support, building practical experience in infrastructure that underpins secure, reliable systems.',
    tags: ['Databases', 'Networking'],
  },
  {
    id: 'etix',
    org: 'eTIX / Sematech General Trading Co. Ltd.',
    role: 'Sales and Marketing Manager',
    period: '2024 - Present',
    description:
      'Worked in sales and marketing for eTIX, a digital ticket booking platform focused on events and entertainment in South Sudan. Responsibilities included promoting the platform, supporting customer acquisition, building partnerships, engaging event organizers, and contributing to the growth and visibility of the digital ticketing service.',
    tags: ['Sales', 'Marketing', 'Business Development', 'Customer Engagement', 'Partnership Development', 'Digital Marketing'],
  },
  {
    id: 'gdsc',
    org: 'Google Developer Student Clubs (GDSC)',
    role: 'Core Team Member & Community Mobilizer',
    period: '2022 – 2025',
    description:
      'Organized developer workshops and community events at the University of Juba, mobilizing students around practical software and web development skills.',
    tags: ['Community', 'Workshops'],
  },
  {
    id: 'mgurush',
    org: 'M-Gurush',
    role: 'Brand Ambassador',
    period: '2022 – 2023',
    description:
      'Represented and promoted M-Gurush’s digital financial services around Juba and community networks, supporting digital adoption efforts.',
    tags: ['Digital Adoption', 'Outreach'],
  },
];

export const projects = [
  {
    id: 'eduaccess',
    title: 'EduAccess',
    description:
      'A USSD-based education access platform designed to help students access academic results and educational information using basic mobile phones. The system integrates with Africa’s Talking APIs and is designed to improve accessibility for students who may have limited access to smartphones or reliable internet connectivity.',
    technologies: ['USSD', 'Africa’s Talking API', 'Web Technologies', 'Backend APIs', 'Database'],
    category: 'Education Technology',
    github: null,
    demo: null,
    image: '/Img/Edu.jpg',
  },
  {
    id: 'ai-social-good',
    title: 'AI for Social Good',
    description:
      'An AI-focused project exploring how artificial intelligence can be applied to address real-world social challenges and improve access to information, services, and decision-making in underserved communities.',
    technologies: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Data Analysis', 'AI APIs'],
    category: 'Artificial Intelligence / Social Impact',
    github: null,
    demo: null,
    image: '/Img/AI.png',
  },
  {
    id: 'hospital-appointment',
    title: 'Hospital Appointment System',
    description:
      'A hospital management and appointment booking platform developed to streamline patient appointments, doctor availability, and administrative workflows. The system includes patient and administrator interfaces and supports appointment scheduling and SMS notifications.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Africa’s Talking SMS API'],
    category: 'Health Technology',
    github: null,
    demo: 'https://medicare-system.vercel.app/',
    image: '/Img/D-S.jpg',
  },
  {
    id: 'la-group',
    title: 'LA Group Website',
    description:
      'A modern corporate website developed for LA Group Lending & General Trading Co. Ltd. The website provides a professional digital presence for the organization and presents its services, company information, projects, and business activities through a responsive modern interface.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'JavaScript'],
    category: 'Web Development',
    github: null,
    demo: 'https://la-group.vercel.app/',
    image: '/Img/LA.jpg',
  },
  {
    id: 'emmanuel-portfolio',
    title: 'Emmanuel Portfolio',
    description:
      'A professional personal portfolio website developed for Emmanuel, a cybersecurity specialist. The platform is designed to showcase professional experience, technical skills, cybersecurity interests, projects, and career achievements through a modern responsive interface.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'JavaScript'],
    category: 'Web Development / Cybersecurity',
    github: null,
    demo: 'https://emmanuel-portfolio-ten-mu.vercel.app/',
    image: '/Img/Emmanuel.jpg',
  },
  {
    id: 'rivonia-cms',
    title: 'Rivonia CMS System',
    description:
      'A full-stack content management system developed for the Rivonia Group website. The system provides an administrative dashboard for managing website content including projects, news, leadership information, media, company information, careers, and other dynamic website content. The system includes cloud-based media management and a backend API for dynamically serving website content.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT Authentication', 'Cloudinary', 'Multer'],
    category: 'Full-Stack Development / CMS',
    github: null,
    demo: 'https://rivonia-group.onrender.com',
    image: '/Img/Rivonia.jpg',
  },
  {
    id: 'sauti-salama',
    title: 'Sauti Salama',
    description:
      'A civic technology and information platform developed to help communities access trusted information, report incidents, and interact with digital civic services. The project combines web technologies, AI-assisted verification, incident reporting, civic information, alerts, and a USSD-oriented workflow to improve accessibility for users with different levels of internet access. The platform follows a modular architecture with verification, reporting, alerts, civic information, source management, dashboard functionality, and USSD simulation.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'AI', 'REST APIs', 'USSD concepts'],
    category: 'Civic Technology / AI / Social Impact',
    github: null,
    demo: 'https://sauti-salama.onrender.com/',
    image: '/Img/SautiSalama.jpg',
  },
  {
    id: 'environmental-club',
    title: 'Environmental Club - University of Juba',
    description:
      'A modern responsive website developed for the Environmental Club at the University of Juba. The platform provides information about the organization, its activities, leadership, partners, environmental initiatives, and opportunities for students and stakeholders to engage with the club.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Motion', 'React Router', 'JavaScript'],
    category: 'Web Development / Environmental Technology',
    github: null,
    demo: 'https://environmental-club-uoj.onrender.com/',
    image: '/Img/EC.jpg', 
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
  {
    id: 'cert-9',
    title: 'Deep/Machine Learning',
    issuer: 'Deep Learning IndabaX, South Sudan',
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
