// 1. Editorial Theme Toggle (Midnight Noir <-> Warm Ivory)

// 1. Theme Toggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light";
    } else {
        themeToggle.textContent = "☾ Dark";
    }

});


// 2. Mobile Navigation Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

// 3. Animated Typewriter Effect in Hero
const roles = [
  "Full-Stack Web Developer",
  "UI/UX & Brand Designer",
  "Cybersecurity Explorer",
  "Digital Growth Strategist"
];

const typewriterEl = document.getElementById("typewriter");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typewriterEl.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, 1600);
      return;
    }
  } else {
    typewriterEl.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, isDeleting ? 45 : 85);
}

typeRole();

// 4. Scroll Progress Bar & Smooth Reveal Animation
const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = progress + "%";
});

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(function (el) {
  observer.observe(el);
});

// 5. Contact Form Validation
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    feedback.style.color = "#f87171";
    feedback.textContent = "Please fill in all fields before sending.";
  } else if (!email.includes("@") || !email.includes(".")) {
    feedback.style.color = "#f87171";
    feedback.textContent = "Please enter a valid email address.";
  } else {
    feedback.style.color = "#4ade80";
    feedback.textContent = "Thank you, " + name + "! Your message has been received.";
    contactForm.reset();
  }
});