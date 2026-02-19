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
