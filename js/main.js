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
  });

  const savedScroll = localStorage.getItem("scrollPosition");
  if (savedScroll) {
    window.scrollTo(0, parseInt(savedScroll));
  }

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  });
});

// AOS init
AOS.init({
  duration: 800,
  once: true,
});
