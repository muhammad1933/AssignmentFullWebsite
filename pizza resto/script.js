
const reservationForm = document.getElementById('reservationForm');
const successMessage = document.getElementById('successMessage');


reservationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = reservationForm.querySelector('[aria-label="First name"]').value;
    const lastName = reservationForm.querySelector('[aria-label="Last name"]').value;
    const email = reservationForm.querySelector('[aria-label="Your Email"]').value;
    const phoneNumber = reservationForm.querySelector('[aria-label="Phone Number"]').value;
    const date = reservationForm.querySelector('[aria-label="Date"]').value;
    const time = reservationForm.querySelector('[aria-label="Time"]').value;

    // Check if all required fields are filled out
    if (firstName && lastName && email && phoneNumber && date && time) {
        // Display the success message by changing its style
        successMessage.style.display = 'block';

        // Optionally, you can clear the form fields here if needed
        reservationForm.reset();

        // Automatically hide the success message after 3 seconds
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 3000); // 3000 milliseconds (3 seconds)
    }
});
