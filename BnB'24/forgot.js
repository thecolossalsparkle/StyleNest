document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    forgotPasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = forgotPasswordForm[0].value;

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        alert(`A password reset link has been sent to ${email}.`);
    });
});
