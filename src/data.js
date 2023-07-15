import portfolio_gif from './res/projects/portfolio.gif'
import fast_food_gif from './res/projects/fast_food.gif'
//import robots_gif from './res/projects/robots.gif'
import shopping_gif from './res/projects/shopping.gif'
import minishell_gif from './res/projects/minishell.gif'
import philo_gif from './res/projects/philo.gif'
import cub3d_gif from './res/projects/cub3d.gif'
import so_long_gif from './res/projects/so_long.gif'
import notepad_gif from './res/projects/notepad.gif'
import pokemon_gif from './res/projects/pokemon.gif'
import face_detector_gif from './res/projects/face_detector.gif'
import online_booking_gif from './res/projects/online_booking.gif'

export const pages = {
    home: {
        name: 'Home',
        path: '/',
    },
    projects: {
        name: 'Projects',
        path: '/projects',
    }
}

export const personalData = {
    title: 'joaoAlmeidaSantos',
    name: 'João Almeida Santos',
    role: 'Full Stack Developer',
    email: 'j-almeidasantos@hotmail.com',
    linkedIn: 'https://www.linkedin.com/in/j-almeidasantos/',
    gitHub: 'https://github.com/jsantos42',
}

export const projects = [
    {
        title: "Portfolio",
        static: "",
        gif: portfolio_gif,
        brief: "Website showcasing my main projects",
        languages: ["React.js", "Styled-Components", "JavaScript"],
        keywords: ["front end", "website", "portfolio"],
        repo: "https://github.com/jsantos42/portfolio",
        live: "https://j-almeidasantos.engineer",
        description: ""
    },
    {
        title: "Face Detector",
        static: "",
        gif: face_detector_gif,
        brief: "Fullstack project, with API endpoints and login access",
        languages: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JavaScript"],
        keywords: ["full-stack", "front end", "back end", "API", "AJAX"],
        repo: "https://github.com/jsantos42/faceDetector",
        live: "",
        description: ""
    },
	{
		title: "Online Booking",
		static: "",
		gif: online_booking_gif,
		brief: "Single Page Application to schedule appointments",
		languages: ["React.js", "Styled-Components", "JavaScript"],
		keywords: ["front end", "Single Page Application"],
		repo: "https://github.com/jsantos42/onlineBooking",
		live: "",
		description: ""
	},
	{
		title: "Moves of Pokémons",
		static: "",
        gif: pokemon_gif,
        brief: "Searchable list, using AJAX requests and a public API",
		languages: ["React.js", "Styled-Components", "JavaScript"],
        keywords: ["front end", "API", "AJAX"],
        repo: "https://github.com/jsantos42/MovesOfPokemons",
        live: "",
        description: ""
    },
    {
        title: "Fast-Food and Schools in Portugal",
        static: "",
        gif: fast_food_gif,
        brief: "Datascience project to find out a potential geographical clustering",
        languages: ["Python", "R"],
        keywords: ["datascience", "healthcare", "jupyter notebook"],
        repo: "https://github.com/jsantos42/fast_food_and_schools_in_Portugal",
        live: "",
        description: ""
    },
    {
        title: "Notepad",
        static: "",
        gif: notepad_gif,
        brief: "Simple Qt app",
        languages: ["C++", "Qt"],
        keywords: ["front end", "desktop", "app"],
        repo: "https://github.com/jsantos42/Qt/tree/main/Notepad",
        live: "",
        description: ""
    },
    // {
    //     title: "RoboFriends App",
    //     static: "",
    //     gif: robots_gif,
    //     brief: "My first React project, following a Udemy course",
    //     languages: ["React.js", "JavaScript"],
    //     keywords: ["front end", "website", "app"],
    //     repo: "https://github.com/jsantos42/WebDev/tree/master/13_Robot_App",
    //     live: "",
    //     description: ""
    // },
    {
        title: "Shopping List",
        static: "",
        gif: shopping_gif,
        brief: "My first project in Vanilla JS",
        languages: ["JavaScript" ],
        keywords: ["front end", "website", "app"],
        repo: "https://github.com/jsantos42/LearningWebDev/tree/main/10%20DOM%20Events%20(shopping%20list)",
        live: "",
        description: ""
    },
    {
        title: "Minishell",
        static: "",
        gif: minishell_gif,
        brief: "A Unix shell, implemented with an Abstract Syntax Tree",
        languages: ["C"],
        keywords: ["shell", "linux", "unix"],
        repo: "https://github.com/jsantos42/minishell",
        live: "",
        description: ""
    },
    {
        title: "Cub3D",
        static: "",
        gif: cub3d_gif,
        brief: "Simple 3D maze using raycasting",
        languages: ["C"],
        keywords: ["game development", "graphics", "3d"],
        repo: "https://github.com/jsantos42/cub3d",
        live: "",
        description: ""
    },
    {
        title: "So Long",
        static: "",
        gif: so_long_gif,
        brief: "Simple 2D game, using textures and sprites",
        languages: ["C"],
        keywords: ["game development", "graphics", "2d"],
        repo: "https://github.com/jsantos42/so_long",
        live: "",
        description: ""
    },
    {
        title: "Dining Philosophers",
        static: "",
        gif: philo_gif,
        brief: "Implementation of a concurrent algorithm, using threads",
        languages: ["C", "C++"],
        keywords: ["concurrency", "threads", "unix"],
        repo: "https://github.com/jsantos42/Dining_Philosophers",
        live: "",
        description: ""
    }
]
