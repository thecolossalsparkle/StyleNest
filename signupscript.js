document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const fullName = signupForm[0].value;
        const email = signupForm[1].value;
        const username = signupForm[2].value;
        const password = signupForm[3].value;
        const confirmPassword = signupForm[4].value;

        // Basic validation
        if (!fullName || !email || !username || !password || !confirmPassword) {
            alert('Please fill out all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // If validation passes, proceed to the preferences page
        window.location.href = 'preference.html'; 
    });
});
