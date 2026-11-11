/**
 * ==========================================
 * DATA FOR ALL PROJECTS IN PORTFOLIO
 * (Newest --> oldest)
 * ==========================================
 */

// NOTE: Preferred image ratio: 3:2
// NOTE: After adding project data, update array of projects at end of file


const projectToDoAppData = {
    githubURL: "https://github.com/hanazzz/full-stack-todo-app",
    liveURL: "http://todo-demo.hanazait.com/",
    imgURL: "images/portfolio-todo-app.png",
    imgAlt: "Screenshot of the app with a to do list displayed",
    title: "To-Do List App",
    creationDate: "Oct 2026",
    technologies: ["PHP", "JavaScript", "MySQL", "Tailwind CSS"],
    blurb: "Full-stack web app.",
    description: "A simple to-do list web application."
};

const projectPettingFarmSimData = {
    githubURL: "https://github.com/hanazzz/petting-farm-game",
    liveURL: "https://hanazzz.itch.io/petting-farm-sim",
    imgURL: "images/portfolio-petting-farm-sim.png",
    imgAlt: "A short gameplay clip",
    title: "Petting Farm Sim",
    creationDate: "Nov 2025",
    technologies: ["GDScript"],
    blurb: "Game made using Godot.",
    description: "A mellow 2D top-down petting farm game."
};

const projectFirstPlatformerData = {
    githubURL: "https://github.com/hanazzz/2d-platformer-game",
    liveURL: "https://hanazzz.itch.io/my-first-platformer",
    imgURL: "images/portfolio-platformer.png",
    imgAlt: "A short gameplay clip",
    title: "My First Godot Game",
    creationDate: "Oct 2025",
    technologies: ["GDScript"],
    blurb: "Game made using Godot.",
    description: "A simple 2D platformer."
};

const projectBitBuddyData = {
    githubURL: "https://github.com/hanazzz/virtual-pet-app",
    liveURL: "https://bitbuddy.hanazait.com/",
    imgURL: "images/portfolio-bitbuddy.png",
    imgAlt: "A pet on the BitBuddy website",
    title: "BitBuddy",
    creationDate: "Oct 2022",
    technologies: ["Python", "JavaScript", "React", "PostgreSQL", "SQLAlchemy", "Flask", "Tailwind CSS"],
    blurb: "Full-stack web app.",
    description: "A virtual pet app inspired by digital pet games from the early/mid 2000s, but with a modern twist."
};



// Store all project data in an array
const allProjectData = [projectToDoAppData, projectPettingFarmSimData, projectFirstPlatformerData, projectBitBuddyData ];

export { allProjectData }