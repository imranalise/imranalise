// -------------------- THEME TOGGLE --------------------
function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    // Update icons
    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    mobileTheme.textContent = isDark ? "☀️" : "🌙";
}

const themeToggle = document.getElementById("themeToggle");
const mobileTheme = document.getElementById("mobileTheme");

themeToggle.addEventListener("click", toggleTheme);
mobileTheme.addEventListener("click", toggleTheme);

// -------------------- SIDEBAR --------------------
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});
