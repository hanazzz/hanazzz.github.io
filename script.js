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

// Button with info about me
const funFacts = [
  'full-stack software engineer.',
  'probably cuddling my cat right now.',
  'based in the Bay Area.',
  'a product of the Neopets-to-developer pipeline.',
  'trying to help build a better world.',
  'accumulating new recipes faster than I can possibly bake them.',
  'video game completionist.',
  'pro-pineapples on pizza.',
  'looking for a job.',
  'boolProp testingCheatsEnabled true',
  'passionate about writing clear and thorough documentation.',
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