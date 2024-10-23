export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "Innovating and Learning with Every Line of Code",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Inspired by Every Place I've Called Home",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My Tech Stack",
        description: "Constantly Expanding",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Exploring All of Tech, but Backend is My Comfort Zone",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "FlipMart - The College Marketplace",
        des: "A UNC Charlotte exclusive buy-and-sell platform designed by students, for students (Only works with @charlotte.edu emails).",
        img: "/project1.png",
        iconLists: [
            {
                id: 1,
                name: 'Next.js',
                image: "/next.svg",
            },
            {
                id: 2,
                name: 'React.js',
                image: "/re.svg",
            },
            {
                id: 3,
                name: 'Tailwind CSS',
                image: "/tail.svg",
            },
            {
                id: 4,
                name: 'TypeScript',
                image: "/ts.svg",
            },
            {
                id: 5,
                name: 'Prisma',
                image: "/prisma.svg",
            },
            {
                id: 6,
                name: 'Vercel',
                image: "/vercel.svg",
            },
        ],
        link: "https://flipmart-alpha.vercel.app/",
    },
    {
        id: 2,
        title: "Vogue Velocity - A Clothing Marketplace",
        des: "Your go-to marketplace for buying and selling chic and trendy clothing.",
        img: "/project2.png",
        iconLists: [
            {
                id: 1,
                name: 'Express.js',
                image: "/express.svg",
            },
            {
                id: 2,
                name: 'JavaScript',
                image: "/js.svg",
            },
            {
                id: 3,
                name: 'HTML',
                image: "/html.svg",
            },
            {
                id: 4,
                name: 'CSS',
                image: "/css.svg",
            },
            {
                id: 5,
                name: 'MongoDB',
                image: "/mongodb.svg",
            },
        ],
        link: "https://vogue-velocity.onrender.com/",
    },
    {
        id: 3,
        title: "The Stock Whisperers - For Stock Marketers",
        des: "A social media platform dedicated to stock market enthusiasts. Test it out using username 'Tester' and password 'ABC123456'!",
        img: "/project3.png",
        iconLists: [
            {
                id: 1,
                name: 'Flask',
                image: "/flask.svg",
            },
            {
                id: 2,
                name: 'Python',
                image: "/python.svg",
            },
            {
                id: 3,
                name: 'HTML',
                image: "/html.svg",
            },
            {
                id: 4,
                name: 'CSS',
                image: "/css.svg",
            },
            {
                id: 5,
                name: 'PostgreSQL',
                image: "/postgres.svg",
            },
        ],
        link: "https://stock-whisperers.onrender.com/",
    },
    {
        id: 4,
        title: "Bookstore Management System - A Demo",
        des: "My first ever full-stack web app made to showcase my skills. Feel free to CRUD (Create, Read, Update & Delete).",
        img: "/project4.png",
        iconLists: [
            {
                id: 1,
                name: 'Spring Boot',
                image: "/spring-boot.svg",
            },
            {
                id: 2,
                name: 'Java',
                image: "/java.svg",
            },
            {
                id: 3,
                name: 'JavaScript',
                image: "/js.svg",
            },
            {
                id: 4,
                name: 'HTML',
                image: "/html.svg",
            },
            {
                id: 5,
                name: 'CSS',
                image: "/css.svg",
            },
            {
                id: 6,
                name: 'PostgreSQL',
                image: "/postgres.svg",
            },
            {
                id: 7,
                name: 'Heroku',
                image: "/heroku.svg",
            },
        ],
        link: "https://bookstore-management-system-d2506d07e810.herokuapp.com/",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        url: "https://github.com/JadBizri"
    },
    {
        id: 2,
        img: "/link.svg",
        url: "https://linkedin.com/in/jadbizri"
    },
];