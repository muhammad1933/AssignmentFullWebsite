

// JavaScript for payment processing
function handlePaymentSubmission(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiration = document.getElementById('expiration').value;
    const cvv = document.getElementById('cvv').value;
    const pin = document.getElementById('pin').value;
    const amount = document.getElementById('amount').value;

    if (firstName === '' || lastName === '' || address === '' || date === '' || cardNumber === '' || expiration === '' || cvv === '' || pin === '' || amount === '') {
        alert('Please fill in all required fields.');
    } else {
        // Process payment (add your payment processing logic here)
        alert('Payment successful! Amount: ' + amount);

        // Automatically hide the success message after 4 seconds
        setTimeout(function() {
            alert('Payment successful message will be hidden after 4 seconds.');
        }, 4000);

                // Optionally, you can clear the form fields here if needed
                paymentForm.reset();
    }
}

const paymentForm = document.querySelector('.payment-form');
paymentForm.addEventListener('submit', handlePaymentSubmission);

function showPin() {
    const pinInput = document.getElementById('pin');
    if (pinInput.type === 'password') {
        pinInput.type = 'text';
    } else {
        pinInput.type = 'password';
    }
}
