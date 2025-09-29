document.addEventListener("DOMContentLoaded", () => {
  // Determine if we're in a subfolder (like systems)
  const isInSubfolder = window.location.pathname.includes('/systems/');
  const prefix = isInSubfolder ? '../' : '';
  const navHTML = `
    <header>
      <h1><a href="${prefix}index.html">Concept Wiki</a></h1>
      <nav>
        <ul class="nav-bar">
          <li><a href="${prefix}systems.html">Systems</a></li>
          <li><a href="${prefix}world-building.html">World Building</a></li>
          <li><a href="${prefix}entities.html">Entities</a></li>
          <li><a href="${prefix}sitemap.html">Sitemap</a></li>
        </ul>
      </nav>
    </header>
  `;

  const navContainer = document.getElementById("nav-container");
  if (navContainer) {
    navContainer.innerHTML = navHTML;
  }
});
