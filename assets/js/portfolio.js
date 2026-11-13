
(() => {
  const list = document.querySelector("[data-portfolio-list]");
  if (!list) return;
  const items = window.PORTFOLIO_ITEMS || [];
  const filters = document.querySelector("[data-filters]");
  const categories = [
    ["all", "All work"], ["technical", "Technical & SEO"], ["website", "Website copy"],
    ["advertising", "Ad copy"], ["scripts", "Scripts"], ["creative", "Creative writing"]
  ];
  if (filters) filters.innerHTML = categories.map(([key, label], i) =>
    `<button class="filter-btn" type="button" data-filter="${key}" aria-pressed="${i===0}">${label}</button>`
  ).join("");
  function render(filter = "all") {
    const visible = items.filter(item => filter === "all" || item.category === filter);
    list.innerHTML = visible.length ? visible.map((item, i) => `
      <article class="portfolio-entry">
        <div class="entry-no">${String(i + 1).padStart(2, "0")}</div>
        <div>
          <div class="entry-type">${item.categoryLabel || item.category}${item.placeholder ? " · Placeholder" : ""}</div>
          <h3>${item.title}</h3>
          <p>${item.industry || "Subject to be added"} · ${item.audience || "Audience to be added"}</p>
        </div>
        <div class="entry-detail">
          <p>${item.description || ""}</p>
          <p class="small"><strong>Objective:</strong> ${item.objective || "To be added"}</p>
          <p class="small"><strong>Contribution:</strong> ${item.contribution || "To be added"}</p>
          ${item.intent ? `<p class="small"><strong>Search intent:</strong> ${item.intent}</p>` : ""}
        </div>
        <div class="entry-link">${item.url ? `<a href="${item.url}" target="_blank" rel="noopener">View work ↗</a>` : (item.placeholder ? "Add URL" : "Private work")}</div>
      </article>`).join("") : `<p class="empty-state">No entries in this category yet. Add work in content/portfolio-data.js.</p>`;
  }
  filters?.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    filters.querySelectorAll("button").forEach(el => el.setAttribute("aria-pressed", String(el === button)));
    render(button.dataset.filter);
  });
  render();
})();
