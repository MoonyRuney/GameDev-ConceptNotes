document.addEventListener("DOMContentLoaded", () => {
  // Hard code 'GameDev-ConceptNotes/' into all navbar links
  const base = '/GameDev-ConceptNotes/';
  const navHTML = `
    <header>
      <h1><a href="${base}index.html">Concept Wiki</a></h1>
      <nav>
        <ul class="nav-bar">
          <li><a href="${base}systems.html">Systems</a></li>
          <li><a href="${base}world-building.html">World Building</a></li>
          <li><a href="${base}entities.html">Entities</a></li>
          <li><a href="${base}sitemap.html">Sitemap</a></li>
        </ul>
      </nav>
    </header>
  `;

  const navContainer = document.getElementById("nav-container");
  if (navContainer) {
    navContainer.innerHTML = navHTML;
  }
});
