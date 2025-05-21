// Button click and double-click
const magicBtn = document.getElementById("magicBtn");
magicBtn.addEventListener("click", () => {
  magicBtn.textContent = "Clicked!";
  magicBtn.style.backgroundColor = "#4caf50";
});
magicBtn.addEventListener("dblclick", () => {
  alert("Double click secret unlocked! 🎉");
});

// Hover effect on gallery images
const galleryImgs = document.querySelectorAll(".gallery-img");
galleryImgs.forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// Tabs functionality
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons and contents
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Activate clicked tab and its content
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Form validation
const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.visibility = "visible";
}

function clearError(input) {
  const error = input.nextElementSibling;
  error.textContent = "";
  error.style.visibility = "hidden";
}

function validateEmail(email) {
  // Simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

email.addEventListener("input", () => {
  if (!validateEmail(email.value)) {
    showError(email, "Invalid email format");
  } else {
    clearError(email);
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    showError(password, "Password must be at least 8 characters");
  } else {
    clearError(password);
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();

  let valid = true;

  if (!validateEmail(email.value)) {
    showError(email, "Invalid email format");
    valid = false;
  }

  if (password.value.length < 8) {
    showError(password, "Password must be at least 8 characters");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
