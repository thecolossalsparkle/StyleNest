document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting

        const email = loginForm[0].value;
        const password = loginForm[1].value;

        // Basic validation
        if (!email || !password) {
            alert('Please fill out all fields.');
            return;
        }

        // If validation passes, proceed (for example, send data to the server)
        alert('Login successful!'); // Placeholder for actual login logic
        // Here you would typically send the data to your server
    });
});
