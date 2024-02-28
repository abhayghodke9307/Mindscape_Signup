document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform your login logic here.
    // For this example, let's just display the entered username and password.
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    // Clear the form fields after submission.
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});