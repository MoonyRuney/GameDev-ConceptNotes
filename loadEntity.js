async function loadEntity() {
  const container = document.getElementById('entityTable');
  const entityName = container.dataset.entity?.toLowerCase();

  if (!entityName) {
    container.innerHTML = `<p>No entity specified.</p>`;
    return;
  }

  try {
    const res = await fetch('entityTypes.json');
    const data = await res.json();
    const entity = data.find(c => c.name.toLowerCase() === entityName);

    if (!entity) {
      container.innerHTML = `<p>Entity "${entityName}" not found.</p>`;
      return;
    }

    container.innerHTML = `
      <img src="${entity.image}" alt="${entity.name}" />
      <div class="info-text">
        <h3>${entity.name}</h3>
        <p>Strength: ${entity.strength}</p>
      </div>
    `;
  } catch (error) {
    container.innerHTML = `<p>Error loading entity data.</p>`;
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadEntity);
