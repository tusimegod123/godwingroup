// Godwin Group Script
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const switches = [
    document.getElementById("modeToggleMobile"),
    document.getElementById("modeToggleDesktop"),
  ].filter(Boolean);
  const labels = [
    document.getElementById("modeLabelMobile"),
    document.getElementById("modeLabelDesktop"),
  ].filter(Boolean);

  const savedTheme = localStorage.getItem("godwinTheme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    switches.forEach((s) => (s.checked = true));
    labels.forEach((l) => (l.textContent = "Dark Mode"));
  } else {
    switches.forEach((s) => (s.checked = false));
    labels.forEach((l) => (l.textContent = "Light Mode"));
  }

  function toggleTheme(isDark) {
    body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("godwinTheme", isDark ? "dark" : "light");
    labels.forEach(
      (l) => (l.textContent = isDark ? "Dark Mode" : "Light Mode")
    );
    switches.forEach((s) => (s.checked = isDark));
  }

  switches.forEach((toggle) => {
    toggle.addEventListener("change", function () {
      toggleTheme(this.checked);
    });
  });

  const navbar = document.getElementById("mainNavbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  const savedScroll = localStorage.getItem("scrollPosition");
  if (savedScroll) {
    window.scrollTo(0, parseInt(savedScroll));
  }

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  });
});

// // AOS init
// AOS.init({
//   duration: 800,
//   once: true,
// });

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    let count = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));

    const updateCounter = () => {
      if (count < target) {
        count += 10;
        el.innerText = count;
        setTimeout(updateCounter, stepTime);
      } else {
        el.innerText = target;
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form[action*="formspree.io"]');
  const successMessage = document.getElementById("formSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          successMessage.classList.remove("d-none");
          form.reset();
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        alert("Failed to send. Please check your internet connection.");
      });
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("aos-init");
  section.setAttribute("data-aos", "fade-up");
});
document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById("offcanvasMenu");
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
  const links = offcanvasElement.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      offcanvas.hide(); // close the offcanvas menu
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById("offcanvasMenu");

  if (offcanvasElement) {
    const bsOffcanvas =
      bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    // Close offcanvas on any internal link click
    const closeLinks = offcanvasElement.querySelectorAll(
      "a[href^='#'], .btn[href^='#']"
    );

    closeLinks.forEach((link) => {
      link.addEventListener("click", () => {
        bsOffcanvas.hide();
      });
    });
  }
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
