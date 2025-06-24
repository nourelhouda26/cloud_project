// ===== Define the tabs and their respective items =====
const tabs = {
  1: ["Menu Item 1-1", "Menu Item 1-2", "Menu Item 1-3", "Menu Item 1-4"],
  2: ["Menu Item 2-1", "Menu Item 2-2", "Menu Item 2-3", "Menu Item 2-4"],
  3: ["Menu Item 3-1", "Menu Item 3-2", "Menu Item 3-3", "Menu Item 3-4"],
  4: ["Menu Item 4-1", "Menu Item 4-2", "Menu Item 4-3", "Menu Item 4-4"]
};

// ===== Function to display the content of the selected tab =====
function showTab(tabNumber) {
  // Step 1: Toggle the 'active' class on the clicked tab button
  document.querySelectorAll('.tab-btn').forEach((btn, index) => {
    // Only the clicked tab (index === tabNumber - 1) will get the 'active' class
    btn.classList.toggle('active', index === tabNumber - 1);
  });

  // Step 2: Select the area where we will display the menu items
  const content = document.getElementById("tab-content");
  content.innerHTML = ""; // Clear previous content if any

  // Step 3: For each item in the selected tab, create a button dynamically
  tabs[tabNumber].forEach(item => {
    const btn = document.createElement("button");  // Create a <button> element
    btn.textContent = item;                        // Set its label (text)
    btn.onclick = () => simulateApi(item);         // On click, call the REST API simulation
    content.appendChild(btn);                      // Add this button to the content area
  });
}

// ===== Function to simulate a REST API call for the selected item =====
function simulateApi(itemName) {
  const status = document.getElementById("status"); // Get the status bar element

  // Step 1: Show loading message
  status.textContent = `⏳ REST API call in progress for "${itemName}"...`;

  // Step 2: Simulate a delay (1.5 seconds) before showing success message
  setTimeout(() => {
    status.textContent = `✅ REST API call completed successfully for "${itemName}".`;
  }, 1500); // 1500 milliseconds = 1.5 seconds
}

// ===== Automatically show Tab 1 when the page loads =====
document.addEventListener("DOMContentLoaded", () => {
  showTab(1); // This initializes the interface by loading the first tab
});

