const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://therhamza.github.io/portfoliobyrhamza',
  title: 'Portfolio',
}

const about = {
  name: 'Hamza Rehioui',
  role: 'Problem Solver',
  description: `I am a software developer with a Bachelor's degree in Computer Science and Business Administration. My technical skill set includes experience in TypeScript, React Native, NodeJS, MongoDB, and more. I have developed mobile apps and worked on projects to streamline business operations. Throughout my career, I have worked as a software engineer intern, peer tutor, and stage manager, which has demonstrated my adaptability and effective communication skills.`,
  resume: `${process.env.PUBLIC_URL}${'/Resume.pdf'}`,
  social: {
    linkedin: 'https://linkedin.com/in/hamza-rehioui/',
    github: 'https://github.com/therhamza/',
  },
}

const projects = [
  {
    name: 'AUI Campus App',
    description:
      'Mobile app for Al Akhawayn University that consolidates campus resources for students',
    stack: ['TypeScript', 'ReactJS', 'React Native'],
    sourceCode: 'https://github.com/aui/aui-campus-app',
    livePreview: 'https://aui.edu.ma/campus-app',
    images: [
      '/assets/AUICAMPUS1.png',
      '/assets/AUICAMPUS2.png',
      '/assets/AUICAMPUS3.png',
      '/assets/AUICAMPUS4.png',
    ],
  },
  {
    name: 'Playdates',
    description: 'Mobile app that facilitates playdate planning for parents',
    stack: ['React Native', 'NodeJS', 'MongoDB'],
    sourceCode: 'https://github.com/playdates-app/playdates',
    livePreview: 'https://playdates.app',
    images: [
      '/assets/PLAYDATES1.png',
      '/assets/PLAYDATES2.png',
      '/assets/PLAYDATES3.png',
    ],
  },
  {
    name: 'Anzar Awal ERP Tool',
    description: 'FMCG enterprise resource planning tool for Beyond Believers',
    stack: [
      'TypeScript',
      'ReactJS',
      'React Native',
      'Angular',
      'Spring Framework',
      'AWS Amplify',
    ],
    sourceCode: 'https://github.com/beyondbelievers/anzar-awal',
    livePreview: 'https://anzarawal.com',
    images: [
      '/assets/ANZAR1.png',
      '/assets/ANZAR2.png',
      '/assets/ANZAR4.png',
    ],
  },
  {
    name: 'Mission Guatemala Medical Database',
    description: 'Medical database software for clinical use in Guatemala',
    stack: ['C#', 'WinForms', 'MySQL', 'ReactJS', 'Redux'],
    sourceCode: 'https://github.com/mission-guatemala/medical-database',
    livePreview: 'https://missionguatemala.org',
    images: [
      '/assets/MG-WEB1.png',
      '/assets/MG-WEB3.png',
      '/assets/MG-WEB4.png',
    ],
  },
  {
    name: 'Kettacar Rental Management App',
    description: 'Car rental management application developed for Kettacar',
    stack: ['Java', 'JavaFX', 'Python', 'MySQL'],
    sourceCode: 'https://github.com/kettacar/rental-management-app',
    livePreview: 'https://kettacar.com',
    images: ['/assets/GUII.png', '/assets/GUIII.png', '/assets/GUIIII.png'],
  },
  {
    name: 'YanTa - Yet Another Note Taking Application',
    description:
      'As the name implies, this was yet another note taking application.',
    stack: ['C#', 'WinForms', '.NET Framework', 'MySQL'],
    sourceCode: 'https://github.com/yanta/note-taking-app',
    livePreview: 'https://yantanotes.com',
    images: ['/assets/GUI1-2.png', '/assets/GUI2-2.png', '/assets/GUI3-2.png'],
  },
  {
    name: 'Contact Manager',
    description:
      'One of the first GUIs I made, it exclusively utilizes several Java libraries.',
    stack: ['Java', 'Java Spring Framework', 'Serialization Framework'],
    sourceCode: 'https://github.com/whatsapp/contact-manager',
    livePreview: 'https://fakewhatsappcontactmanager.com',
    images: ['/assets/GUI1.png', '/assets/GUI2.png', '/assets/GUI3.png'],
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
  'C',
  'C++',
  'C#',
  'Swift',
  'Java',
  'Kotlin',
  'R',
  'SQL',
  'Python',
  'Angular',
  'Go',
  'Docker',
  'NextJS',
  'Amazon Web Services',
  'Kubernetes',
  'Prisma',
  'NodeJS',
  'Windows XP',
  'Windows 7',
  'Windows 10',
  'Windows 11',
  'macOS',
  'Linux',
  'Kali',
  'Ubuntu',
  'Jira',
  'Bitbucket',
  'Visual Studio',
  'Figma',
  'MySQL',
  'PostgreSQL',
  'Microsoft Office Suite',
  'Adobe CC Suite',
  'LaTeX',
  'iWork Suite',
  'Final Cut Pro X',
  'Pro Tools',
  'Google Suite',
  'cPanel',
  'Plesk',
]

const contact = {
  email: 'hamzarehioui20@gmail.com',
}

export { header, about, projects, skills, contact }
