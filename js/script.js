// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Newsletter Form
const newsletter = document.querySelector(".newsletter form");

if (newsletter) {
    newsletter.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = newsletter.querySelector("input").value;

        if (email === "") {
            alert("Please enter your email.");
        } else {
            alert("Thank you for subscribing!");
            newsletter.reset();
        }
    });
}

// Contact Form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.querySelector("input[type='text']").value;
        const email = contactForm.querySelector("input[type='email']").value;
        const message = contactForm.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please complete all required fields.");
        } else {
            alert("Your message has been sent successfully!");
            contactForm.reset();
        }
    });
}

// Back to Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "45px";
topBtn.style.height = "45px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#d4af37";
topBtn.style.color = "#000";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});