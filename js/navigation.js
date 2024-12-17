// Navigation functionality
export function initNavigation() {
  const mobileMenuButton = document.createElement("button");
  mobileMenuButton.classList.add("mobile-menu-button");
  mobileMenuButton.innerHTML = "☰";

  const nav = document.querySelector("nav");
  nav.append(mobileMenuButton);
  // Select the container with all the links
  const navLinks = document.querySelector(".nav-links");
  mobileMenuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    mobileMenuButton.innerHTML = document
      .querySelector(".nav-links")
      .classList.contains("show")
      ? "✕"
      : "☰";
  });

  navLinks.addEventListener("click", (event) => {
    // Check if the clicked element is an <a> tag
    if (event.target.tagName === "A") {
      const hrefValue = event.target.getAttribute("href");
      // const idValue = event.target.id || "No ID";

      // Log the values
      console.log("Link clicked:", hrefValue);
      // console.log("ID:", idValue);

      navLinks.classList.toggle("show");
      mobileMenuButton.innerHTML = document
        .querySelector(".nav-links")
        .classList.contains("show")
        ? "✕"
        : "☰";
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      document.querySelector(".nav-links").classList.remove("show");
      mobileMenuButton.innerHTML = "☰";
    }
  });
}

export function setActiveNavigation() {
  // Get all navigation links
  const navLinks = document.querySelectorAll("[data-nav-link]");

  // Get the current page path
  const currentPath = window.location.pathname;

  // Remove active class from all links first
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Find and add active class to matching link
  const activeLink = Array.from(navLinks).find((link) => {
    // Exact match for root
    if (link.getAttribute("href") === "/") {
      return currentPath === "/";
    }

    // Match full path or paths with the link as a prefix
    return currentPath.startsWith(link.getAttribute("href"));
  });

  // Add active class if found
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

