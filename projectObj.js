
// Represents a project in the portfolio
class PortfolioItem {
    
    // Creates an instance of PortfolioItem
        constructor(
            projectURL = "",
            imgURL = "images/portfolio-placeholder.png",
            imgAlt = "Placeholder image with the text 'tbd'",
            title = "My next project",
            creationDate = "Coming soon",
            technologies = "TBD",
            blurb = null,
            description = "Check back later to see what's next!"
        ) {
            this.projectURL = projectURL;
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
}

// FOR TESTING: Data for a project to display in portfolio
const projectSpaceData = {
    projectURL: "https://github.com/hanazzz/spectacular-space-adventure",
    imgURL: "images/portfolio-space.png",
    imgAlt: "A terminal window with text from The Spectacular Space Adventure",
    title: "The Spectacular Space Adventure",
    creationDate: "Jan 2022",
    technologies: ["Python", "CLI"],
    blurb: "Command line game written in Python.",
    description: "Make your way through space as you attempt to meet up with your friend on another planet.",
    objectName: "projectSpaceName"
};

// FOR TESTING: Create instance using default field values
const projectPlaceholder = new PortfolioItem();

// FOR TESTING: Create instsance using project data (from projectSpaceData)
const projectSpace = PortfolioItem.from(projectSpaceData);

// FOR TESTING: Print to console to test results
console.log(projectPlaceholder)
console.log("-------")
console.log(projectSpace)