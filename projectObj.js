// Represents a project in the portfolio
class PortfolioItem {
    
    // Creates an instance of PortfolioItem
    constructor(
        githubURL = "",
        liveURL = "",
        imgURL = "images/portfolio-placeholder.png",
        imgAlt = "Placeholder image with the text 'tbd'",
        title = "My next project",
        creationDate = "Coming soon",
        technologies = ["TBD"],
        blurb = null,
        description = "Check back later to see what's next!"
    ) {
        this.githubURL = githubURL;
        this.liveURL = liveURL;
        this.imgURL = imgURL;
        this.imgAlt = imgAlt;
        this.title = title;
        this.creationDate = creationDate;
        this.technologies = technologies;
        this.blurb = blurb;
        this.description = description;

        // FOR TESTING: Print to console to confirm instance was succesfully created
        console.log("----- PortfolioItem instance created -----")
    }

    // Builds the instance from existing data (passed in as object)
    static from(data) {
        return Object.assign(new(PortfolioItem), data)
    }

    /* Converts the technologies array into <li> elements and conjoins them
    @returns {string}  a string of all the <lI> elements
    e.g. "<li>JavaScript</li><li>Python</li>" */
    #technologiesToHTML() {
        // Uses the array of technologies stored on the instance
        return this.technologies
        // Puts each technology from the array into an <li> element and creates an array of all these elements
        .map(tech => `<li>${tech}</li>`)
        // Joins the array items together into one long string
        .join("");
    }

    /* TO DO: ADD DOCUMENTATION
    @returns */
   #linksToHTML() {
        // Create variable to store project links as HTML
        let linksHTML = "";

        // If a GitHub URL exists, add it
        if (this.githubURL) {
            linksHTML += ` ∙ <a href="${this.githubURL}" target="_blank" rel="noopener noreferrer">GitHub</a>`;
        }

        // If a Live URL exists, add it
        if (this.liveURL) {
            linksHTML += ` ∙ <a href="${this.liveURL}" target="_blank" rel="noopener noreferrer">Live</a>`;
        }

        return linksHTML
   }

    // Generates the HTML block for this project instance
    toHTML() {

        let technologiesHTML = this.#technologiesToHTML();

        let linksHTML = this.#linksToHTML();

        return `
            <div class="portfolio-item">
                <a href="${this.githubURL}" target="_blank" rel="noopener noreferrer">
                    <img
                    src="${this.imgURL}"
                    alt="${this.imgAlt}"
                    width="460"
                    height="auto"
                    class="portfolio-img">
                </a>
                <h3>${this.title}</h3>
                <p class="project-date">${this.creationDate}${linksHTML}</p>
                <ul class="technologies">
                    ${technologiesHTML}
                </ul>
                <p class="project-short">${this.blurb}</p>
                <p>${this.description}</p>
            </div>
        `;
    }
}

// FOR TESTING: Data for a project to display in portfolio
// const projectSpaceData = {
//     projectURL: "https://github.com/hanazzz/spectacular-space-adventure",
//     imgURL: "images/portfolio-space.png",
//     imgAlt: "A terminal window with text from The Spectacular Space Adventure",
//     title: "The Spectacular Space Adventure",
//     creationDate: "Jan 2022",
//     technologies: ["Python", "CLI"],
//     blurb: "Command line game written in Python.",
//     description: "Make your way through space as you attempt to meet up with your friend on another planet.",
//     objectName: "projectSpaceName"
// };

// // FOR TESTING: Create instance using default field values
// const projectPlaceholder = new PortfolioItem();

// // FOR TESTING: Create instsance using project data (from projectSpaceData)
// const projectSpace = PortfolioItem.from(projectSpaceData);

// // FOR TESTING: Print to console to test results
// console.log(projectPlaceholder)
// console.log("-------")
// console.log(projectSpace)

// Creates an instance for each portfolio project using an array (allProjectData)
// Returns an array containing all the instances
function createProjects(allProjectData) {
    return allProjectData.map(proj => PortfolioItem.from(proj));
}

export { PortfolioItem, createProjects }