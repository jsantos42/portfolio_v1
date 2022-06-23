// import fast_food_png from './res/fast_food.png'
// import fast_food_gif from './res/fast_food.gif'
import minishell_png from './res/minishell.png'
import minishell_gif from './res/minishell.gif'
import philo_png from './res/philo.png'
import philo_gif from './res/philo.gif'
import cub3d_png from './res/cub3d.png'
import cub3d_gif from './res/cub3d.gif'
import so_long_png from './res/so_long.png'
import so_long_gif from './res/so_long.gif'

export const personalData = {
    name: 'Joao',
    role: 'Front-End Developer'
}
export const projects = [
    {
        title: "Fast-Food",
        static: "",
        gif: "",
        brief: "Datascience project involving geostatistics",
        languages: ["Python", "R"],
        keywords: ["healthcare", "jupyter notebook"],
        repo: "",
        live: "",
        description: ""
    },
    {
        title: "minishell",
        static: minishell_png,
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
        static: cub3d_png,
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
        static: so_long_png,
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
        static: philo_png,
        gif: philo_gif,
        brief: "Practical implementation of a concurrent algorithm, using threads",
        languages: ["C", "C++"],
        keywords: ["concurrency", "threads", "unix"],
        repo: "https://github.com/jsantos42/Dining_Philosophers",
        live: "",
        description: ""
    }
]
