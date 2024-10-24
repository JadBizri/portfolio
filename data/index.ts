export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#experience" },
    { name: "Contact", link: "#contact" }
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
        title: "Check Out My Resume",
        description: "See What I’ve Done",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 w-1/2 rounded-tl z-50",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/resume.png",
        spareImg: "",
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
            {
                id: 6,
                name: 'Render',
                image: "/render.svg",
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
            {
                id: 6,
                name: 'Render',
                image: "/render.svg",
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
        title: "UNC Charlotte - Class of '24",
        desc: "Completed a Bachelor's in Computer Science with a concentration in software engineering.",
        className: "md:col-span-2",
        thumbnail: "/grad.png",
        link: 'https://www.charlotte.edu/'
    },
    {
        id: 2,
        title: "Valet - Toyota of North Charlotte (Feb '21 - May '24)",
        desc: "Balanced part-time work while completing a degree, improving teamwork and problem-solving skills.",
        className: "md:col-span-2",
        thumbnail: "/valet.png",
        link: 'https://www.toyotaofnorthcharlotte.com/'
    },
    {
        id: 3,
        title: "Volunteer - Lebanese Red Cross (2018)",
        desc: "Participated in community services and learned to perform some essential emergency procedures.",
        className: "md:col-span-2",
        thumbnail: "/red-cross.png",
        link: 'https://donate.redcrossredcrescent.org/lb/supportLRC/~my-donation',
    },
    {
        id: 4,
        title: "Mr. Worldwide",
        desc: "Lived and grew up in Lebanon, Saudi Arabia, and the UAE, adapting to different cultures and environments.",
        className: "md:col-span-2",
        thumbnail: "/earth.png",
        link: 'https://againstthecompass.com/en/best-places-visit-middle-east/',
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