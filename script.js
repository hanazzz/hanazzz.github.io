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