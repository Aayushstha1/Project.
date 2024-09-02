// Example: Simple form validation (expand this as needed)

document.querySelector('form').addEventListener('submit', function(event) {
    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Login successful!");
    }
});
