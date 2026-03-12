// STICKY NAVIGATION START

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);
obs.observe(sectionHeroEl);

// STICKY NAVIGATION END

// ***************************************************************************

// FAQ INTERACTIVITY

const questions = document.querySelectorAll(".question");

questions.forEach((question, index) => {
  const answer = question.querySelector(".faq-answer");
  const icon = question.querySelector(".down-arrow");

  // Open first question by default
  if (index === 0) {
    question.classList.add("active");
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.setAttribute("name", "chevron-up-outline");
  }

  question.querySelector(".question-icon").addEventListener("click", () => {
    // Close all questions
    questions.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".faq-answer").style.maxHeight = null;
      item
        .querySelector(".down-arrow")
        .setAttribute("name", "chevron-down-outline");
    });

    // Open clicked question (if it wasn't already open)
    if (!question.classList.contains("active")) {
      question.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.setAttribute("name", "chevron-up-outline");
    }
  });
});

// ***************************************************************************

// RESPONSIVE

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnMobileNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  document.body.classList.toggle("nav-open");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// SCROLL REVEAL ANIMATION

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 120;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

// Run once when page loads
reveal();

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
  const target = +counter.dataset.target;
  const duration = 2000; // animation time in ms
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // ease-out effect
    const easeOut = 1 - Math.pow(1 - progress, 3);

    const value = Math.floor(easeOut * target);
    counter.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

// INTERSECTION OBSERVER

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          animateCounter(counter);
        });

        observer.disconnect();
      }
    });
  },
  { threshold: 0.4 },
);

observer.observe(document.querySelector("#statistics"));

// TESTIMONIAL SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

reveals.forEach((reveal) => {
  revealObserver.observe(reveal);
});
