import { PortfolioItem, createProjects } from "./projectObj.js";
import { allProjectData } from "./projectData.js";




/**
 * ==========================================
 * PORTFOLIO PROJECTS DYNAMIC HTML
 * ==========================================
 */

// Create instances for each project and store all instances as an array
const portfolioItems = createProjects(allProjectData);

const portfolioItemsHTML = portfolioItems.map(item => item.toHTML()).join("");

// Get the portfolio div that will contain all projects
const portfolioContainer = document.getElementById("portfolio-container");

/* Confirm that the portfolio div exists (to prevent website from breaking)
If div exists, insert HTML blocks for all projects */
if (portfolioContainer) {
    portfolioContainer.innerHTML = portfolioItemsHTML
}




/**
 * ==========================================
 * CONTACT FORM HANDLING
 * ==========================================
 */

// Send email from contact form
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent page refresh
    event.preventDefault();
    // Initialize var to store form confirmation msg (success or error)
    let formConfirmation = undefined;

    emailjs.sendForm('contact_service', 'contact_form', this)
      .then(function() {

        console.log('SUCCESS!');
        formConfirmation = "Message sent! Check your email for a confirmation."
      }, function(error) {
        console.log('FAILED...', error);
        formConfirmation = "Uh oh, something went wrong. Please wait and try again or message me on LinkedIn instead."
      })
      .then(() => {
        function toggleConfirmation() {
            document.getElementById("contact-confirmation").classList.toggle("hidden");
        }
        // Show confirmation message
        toggleConfirmation();
        // Update confirmation text
        document.getElementById("contact-confirmation").innerText = formConfirmation;
        // Hide confirmation message after 10 seconds
        setTimeout(toggleConfirmation, 10000)
      });
  });
}




/**
 * ==========================================
 * FUN FACTS BUTTON
 * ==========================================
 */

// Store all facts as strings in an array
const funFacts = [
  'full-stack software engineer.',
  'probably cuddling my cat right now.',
  'based in the Bay Area.',
  'a product of the Neopets-to-developer pipeline.',
  'currently building a side project with Node.js and the Spotify API.',
  'coding to a soundtrack of trance music.',
  'perpetually testing out new baking recipes.',
  'prone to video game completionist tendencies.',
  'armed with a passion for clear docs after years of writing user guides and SOPs.',
  'boolProp testingCheatsEnabled true',
]

// Display different facts about me with button click
let factIndex = 1   // Start at 1 because page loads already displaying the first fact

function getFact() {
  // if factIndex greater than funFacts --> at end of array --> reset factIndex to 0
  if (factIndex === funFacts.length) {
    factIndex = 0
  }
  // Get fact from array using idx
  let currentFact = funFacts[factIndex]
  // Update DOM
  document.getElementById('intro-blurb').innerText = currentFact
  // Increase idx
  factIndex += 1;
}

document.getElementById('intro-button').addEventListener('click', getFact);