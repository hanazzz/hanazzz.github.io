/**
 * Exports:
 * - {class} PortfolioItem - Represents a single portfolio project.
 * - {function} createProjects - Uses array of data to output an array of PortfolioItem instances.
 */



/**
 * Represents a project in the portfolio
 * @export
 * @class PortfolioItem
 */
export class PortfolioItem {
    
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


    /**
     * Builds the PortfolioItem instance from existing data (passed in as object)
     * @static
     * @param {Object} data
     * @returns {Object} A PortfolioItem instance
     * @memberof PortfolioItem
     */
    static from(data) {
        return Object.assign(new(PortfolioItem), data)
    }


    /**
     * Converts an instance's technologies array into HTML and conjoins them
     * @returns {string} A string of all the <lI> elements
     * (e.g. "`<li>JavaScript</li><li>Python</li>`")
     * @memberof PortfolioItem
     */
    #technologiesToHTML() {
        // Uses the array of technologies stored on the instance
        return this.technologies
        // Puts each technology from the array into an <li> element and creates an array of all these elements
        .map(tech => `<li>${tech}</li>`)
        // Joins the array items together into one long string
        .join("");
    }


    /**
     * Converts any of an instance's links (if any) into HTML and conjoins them
     * @returns {string} A string of HTML containing the instance's links
     * @memberof PortfolioItem
     */
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

    
    /**
     * Generates the HTML block for this project instance
     * @return {string} HTML block for the project
     * @memberof PortfolioItem
     */
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

/**
 *
 * Creates an instance for each portfolio project using an array
 * @param {array} allProjectData An array of objects, with each object representing one project's data
 * @returns {Array.<PortfolioItem>} An array containing all the PortfolioItem instances
 */
export function createProjects(allProjectData) {
    return allProjectData.map(proj => PortfolioItem.from(proj));
}