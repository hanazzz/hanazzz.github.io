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


// Typing different facts about myself
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const typingDelay = 100; // Typing speed
const erasingDelay = 100; // Erasing speed
const newTextDelay = 2000; // Delay between current and next text

let factIndex2 = 0;
let charIndex = 0;

function type() {
  // If charIndex < length of current str --> there are chars left in the str to type
  // --> display one more char and increase charIndex
  if (charIndex < funFacts[factIndex2].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += funFacts[factIndex2].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  // Otherwise, all chars are displayed --> start erasing chars
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
  // If charIndex < 0 --> there are chars left in the str to erase
  // --> display one less char and decrease charIndex
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = funFacts[factIndex2].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  // Otherwise, entire str has been erased
  // --> increase factIndex2 and start typing next str
  else {
    cursorSpan.classList.remove("typing");
    factIndex2++;
    if(factIndex2>=funFacts.length) factIndex2=0;
    setTimeout(type, typingDelay + 1100);
  }
}

// On DOM Load initiate the typing effect
document.addEventListener("DOMContentLoaded", function() {
  if(funFacts.length) setTimeout(type, newTextDelay + 250);
});