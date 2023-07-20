import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import hulu from '../assets/hulu.jpg';
import netflix from '../assets/netflix.jpg';
import gamelist from '../assets/gamelist.jpg';
import mern from '../assets/mern.jpg';
import crud from '../assets/crud.jpg';
import warranty from '../assets/warranty.jpg';

export const data = [
    {
        date: '2022-2023',
        title: 'Hulu Clone',
        link: 'https://hulu-clone-rho-wine.vercel.app',
        materials: [
            { type: faGithub, link: 'https://github.com/kanompang962/hulu-clone.git' },
            { type: faLink, link: 'https://hulu-clone-rho-wine.vercel.app' },
        ],
        descriptions: [
            "A function to work. web design structure, fetch Api",
        ],
        skills: [
            ["React", "Tailwind"],

        ],
        picture: hulu,
    },
    {
        date: "2012-2023",
        title: "Netflix Clone",
        link: "https://netflix-clone-frontend-cyan.vercel.app",
        materials: [
            { type: faGithub, link: 'https://github.com/kanompang962/netflix-clone-frontend.git' },
            { type: faLink, link: 'https://netflix-clone-frontend-cyan.vercel.app' },
        ],
        descriptions: [
            "There is a function to work. web page design structure, play video on website, authentication ",
        ],
        skills: [
            ["React", "Tailwind"],
            ["NodeJs", "Express", "MongoDB"]
        ],
        picture: netflix,
    },
    {
        date: '2022-2023',
        title: 'Game List Clone',
        link: 'https://game-list-clone.vercel.app/',
        materials: [
            { type: faGithub, link: 'https://github.com/kanompang962/game-list-clone.git' },
            { type: faLink, link: 'https://game-list-clone.vercel.app/' },
        ],
        descriptions: [
            "A function to work. web design structure, fetch Api",
        ],
        skills: [
            ["React", "Tailwind"],

        ],
        picture: gamelist,
    },
    {
        date: '2021-2022',
        title: 'Product Warranty Registration System',
        link: 'https://www.euroxforce.com:20443/warranty/?fbclid=IwAR2x0wyZnMWbyuZFcQ2MSuqIAsG_Nh_5p9vZbEvbGsvyuOmWBexItGIxWLc',
        materials: [
            { type: faGithub, link: 'https://github.com/kanompang962/warranty_v2.git' },
            { type: faLink, link: 'https://www.euroxforce.com:20443/warranty/?fbclid=IwAR2x0wyZnMWbyuZFcQ2MSuqIAsG_Nh_5p9vZbEvbGsvyuOmWBexItGIxWLc' },
        ],
        descriptions: [
            "Develop a web application of a company that wants to collect information of buyers of products organized by the company.Sell to use the information for the benefit of after-sales service and marketing.",
        ],
        skills: [
            ["PHP", "jQuery", 'MySQL'],

        ],
        picture: warranty,
    },
    {
        date: "2022-2023",
        title: "Mern Stack",
        link: "https://mern-stack-workshop-frontend.vercel.app/",
        materials: [
            { type: faGithub, link: 'https://github.com/kanompang962/mern-stack-workshop-backend.git' },
            { type: faLink, link: 'https://mern-stack-workshop-frontend.vercel.app/' },
        ],
        descriptions: [
            "There is a function to work Web page Design structure, CRUD, Authentication, Protect Route",

        ],
        skills: [
            ["React", "Bootstrap"],
            ["NodeJs", "Express", "MongoDB"]
        ],
        picture: mern,
    },
    {
        date: "2021-2022",
        title: "CRUD",
        link: "https://crud-react-zeta.vercel.app/",
        materials: [
            { type: faGithub, link: 'https://github.com/kanompang962/crud-react.git' },
            { type: faLink, link: 'https://crud-react-zeta.vercel.app/' },
        ],
        descriptions: [
            "There is a function to work Web page Design structure, CRUD, Authentication, Protect Route",

        ],
        skills: [
            ["React", "MUI"],
        ],
        picture: crud,
    },

];