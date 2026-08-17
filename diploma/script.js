document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });

    // Close menu on link click
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.classList.remove("active");
      });
    });
  }

  // 2. Testimonials Slider
  const testimonials = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  function showSlide(index) {
    if (testimonials.length === 0) return;

    if (index >= testimonials.length) currentIndex = 0;
    else if (index < 0) currentIndex = testimonials.length - 1;
    else currentIndex = index;

    testimonials.forEach((card, idx) => {
      card.classList.toggle("active", idx === currentIndex);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
    prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));

    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const slideIndex = parseInt(e.target.getAttribute("data-slide"));
        showSlide(slideIndex);
      });
    });

    // Auto-play slider
    setInterval(() => {
      showSlide(currentIndex + 1);
    }, 6000);
  }

  // 3. Contact Form Submission via AJAX (Fetch API)
  const contactForm = document.getElementById("contactForm");
  const formAlert = document.getElementById("formAlert");
  const submitBtn = document.getElementById("submitBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      if (submitBtn) submitBtn.disabled = true;

      if (formAlert) {
        formAlert.style.display = "block";
        formAlert.className = "alert-message alert-info";
        formAlert.textContent = "Надсилання повідомлення...";
      }

      try {
        const response = await fetch("send_mail.php", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (response.ok && result.status === "success") {
          if (formAlert) {
            formAlert.className = "alert-message alert-success";
            formAlert.textContent = result.message;
          }
          contactForm.reset();
        } else {
          if (formAlert) {
            formAlert.className = "alert-message alert-error";
            formAlert.textContent = result.message || "Помилка при відправці.";
          }
        }
      } catch (error) {
        if (formAlert) {
          formAlert.className = "alert-message alert-error";
          formAlert.textContent = "Сталася мережева помилка. Спробуйте пізніше.";
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // 4. Smooth Scroll Active Link Highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  window.addEventListener("scroll", () => {
    let currentSection = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});
