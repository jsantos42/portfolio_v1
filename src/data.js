import fast_food_gif from './res/fast_food.gif'
import minishell_gif from './res/minishell.gif'
import philo_gif from './res/philo.gif'
import cub3d_gif from './res/cub3d.gif'
import so_long_gif from './res/so_long.gif'

export const personalData = {
    name: 'Joao',
    currentRole: 'Software Engineer',
    newRole: 'Front-End Developer'
}
export const projects = [
    {
        title: "Fast-Food and Schools in Portugal",
        static: "",
        gif: fast_food_gif,
        brief: "Datascience project involving geostatistics",
        languages: ["Python", "R"],
        keywords: ["healthcare", "jupyter notebook", "datascience"],
        repo: "",
        live: "",
        description: ""
    },
    {
        title: "minishell",
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
        title: "cub3D",
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
