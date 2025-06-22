const tabs = {
  1: ["Menu Item 1-1", "Menu Item 1-2", "Menu Item 1-3", "Menu Item 1-4"],
  2: ["Menu Item 2-1", "Menu Item 2-2", "Menu Item 2-3", "Menu Item 2-4"],
  3: ["Menu Item 3-1", "Menu Item 3-2", "Menu Item 3-3", "Menu Item 3-4"],
  4: ["Menu Item 4-1", "Menu Item 4-2", "Menu Item 4-3", "Menu Item 4-4"]
};

function showTab(tabNumber) {
  // Gérer l’état actif des onglets
  document.querySelectorAll('.tab-btn').forEach((btn, index) => {
    btn.classList.toggle('active', index === tabNumber - 1);
  });

  const content = document.getElementById("tab-content");
  content.innerHTML = "";

  tabs[tabNumber].forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item;
    btn.onclick = () => simulateApi(item);
    content.appendChild(btn);
  });
}

function simulateApi(itemName) {
  const status = document.getElementById("status");
  status.textContent = `⏳ Appel REST API en cours pour "${itemName}"...`;
  setTimeout(() => {
    status.textContent = `✅ Appel terminé avec succès pour "${itemName}".`;
  }, 1500);
}

// Onglet 1 affiché par défaut
document.addEventListener("DOMContentLoaded", () => {
  showTab(1);
});
