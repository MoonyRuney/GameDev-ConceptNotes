document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <header>
      <h1><a href="index.html">Concept Wiki</a></h1>
      <nav>
        <ul class="nav-bar">
          <li><a href="systems.html">Systems</a></li>
          <li><a href="world-building.html">World Building</a></li>
          <li><a href="entities.html">Entities</a></li>
          <li><a href="sitemap.html">Sitemap</a></li>
        </ul>
      </nav>
    </header>
  `;

  const navContainer = document.getElementById("nav-container");
  if (navContainer) {
    navContainer.innerHTML = navHTML;
  }
});
