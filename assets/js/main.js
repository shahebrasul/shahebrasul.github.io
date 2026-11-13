
(() => {
  const config = window.SITE_CONFIG || {};
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
  }
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll("[data-product-count]").forEach(el => el.textContent = config.productCount || "multiple");
  document.querySelectorAll("[data-email]").forEach(el => {
    const email = config.email || "";
    if (email && !email.includes("YOUR_EMAIL")) {
      el.href = `mailto:${email}`;
      el.textContent = email;
    } else {
      el.href = "contact.html";
      el.textContent = "Use the contact page";
    }
  });
  document.querySelectorAll("[data-social-links]").forEach(container => {
    container.innerHTML = Object.entries(config.socials || {}).map(([label, url]) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`
    ).join("");
  });
  document.querySelectorAll("[data-cv-link]").forEach(link => {
    link.href = config.cvPath || "#";
  });
})();
