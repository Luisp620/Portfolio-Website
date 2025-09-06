// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // stop default jump
    const targetId = this.getAttribute('href').slice(1); // remove #
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  // Get input values
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Get error spans
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  let isValid = true;

  // Name validation
  if (name.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  if (email.value.trim() === '') {
    emailError.textContent = 'Please enter your email.';
    isValid = false;
  } else if (!email.value.includes('@')) {
    emailError.textContent = 'Please enter a valid email.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Message validation
  if (message.value.trim() === '') {
    messageError.textContent = 'Please enter a message.';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  // If not valid, prevent submission
  if (!isValid) {
    e.preventDefault(); // only block submission if there's an error
  }
});

window.addEventListener('pageshow', function () {
  const form = document.getElementById('contact-form');
  if (form) {
    form.reset();
  }
});

// Scroll-to-top button
const scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Section reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Sticky header shadow
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Typing animation for name
const typedName = document.getElementById('typed-name');
const cursor = document.querySelector('.cursor');
const nameText = "Luis Polanco";
let index = 0;

const typeLetter = () => {
  if (index < nameText.length) {
    typedName.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeLetter, 150);
  } else {
  cursor.remove(); // completely removes the blinking line
    }
};

window.addEventListener('load', typeLetter);