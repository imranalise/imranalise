const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email via EmailJS
    emailjs.send("service_oarm9lk", "template_4p3wlq6", templateParams)
        .then(function (response) {
            alert("Message sent successfully!");
            form.reset();
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS error:", error);
        });
});
