/**
 * ==========================================
 * DATA FOR ALL PROJECTS IN PORTFOLIO
 * (Newest --> oldest)
 * ==========================================
 */


const projectToDoAppData = {
    githubURL: "https://github.com/hanazzz/full-stack-todo-app",
    liveURL: "",
    imgURL: "images/portfolio-todo-app.png",
    imgAlt: "Screenshot of the app with a to do list displayed",
    title: "[In Progress] To-Do List App",
    creationDate: "Oct 2026",
    technologies: ["PHP", "JavaScript", "MySQL", "CSS"],
    blurb: "Full-stack web app.",
    description: "A simple to-do list web application."
};

const projectPettingFarmSimData = {
    githubURL: "https://github.com/hanazzz/petting-farm-game",
    liveURL: "",
    imgURL: "images/portfolio-petting-farm-sim.gif",
    imgAlt: "A short gameplay clip",
    title: "Petting Farm Sim",
    creationDate: "Nov 2025",
    technologies: ["GDScript"],
    blurb: "Game made using Godot.",
    description: "A mellow 2D top-down petting farm game."
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
    description: "A virtual pet app inspired by digital pet games from the early/mid 2000s, but with a modern twist: AI."
};

const projectSpaceData = {
    githubURL: "https://github.com/hanazzz/spectacular-space-adventure",
    liveURL: "",
    imgURL: "images/portfolio-space.png",
    imgAlt: "A terminal window with text from The Spectacular Space Adventure",
    title: "The Spectacular Space Adventure",
    creationDate: "Jan 2022",
    technologies: ["Python", "CLI"],
    blurb: "Command line game written in Python.",
    description: "Make your way through space as you attempt to meet up with your friend on another planet."
};

const placeholderProject = {
    githubURL: "",
    liveURL: "",
    imgURL: "images/portfolio-placeholder.png",
    imgAlt: "Placeholder image with the text 'tbd'",
    title: "My next project",
    creationDate: "Coming soon",
    technologies: ["TBD"],
    blurb: null,
    description: "Check back later to see what's next!"
};



// Store all project data in an array
const allProjectData = [projectToDoAppData, projectPettingFarmSimData, projectBitBuddyData, projectSpaceData, placeholderProject ];

export { allProjectData }