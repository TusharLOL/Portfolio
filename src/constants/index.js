import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Tech Team Member",
        company_name: "GDG on Campus MESWCOE",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "June 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Iphone Webiste',
        description: 'Heres an amazing iphone website which no only includes the GSAP animations but also the iphone 3d components which helps you see the iphones structure in real time',
        link: 'https://github.com/TusharLOL/iPhone',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Spotify Clone',
        description: 'Developed a Spotify clone, allowing users to stream music, create playlists, and connect with friends.',
        link: 'https://github.com/TusharLOL/Spotify',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'AI Calculator',
        description: 'An AI powered calculator which can solve any mathematical problem in a fraction of seconds',
        link: 'https://github.com/TusharLOL/AI-CALCI.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://insta-clone-lime.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'PDF Editors and Converters',
        description: 'Developed a web application that allows users to edit and convert PDF files, including features such as merging, splitting, and password protection.',
        link: 'https://github.com/TusharThanvi1990/AvniPDF.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'MERN Stack Authenication using firebase',
        description: 'Developed a full-stack application using the MERN stack, with authentication handled by Firebase.',
        link: 'https://github.com/TusharLOL/MERN-AUTH.git',
    }
];
