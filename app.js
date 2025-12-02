// Example app data with individual download links
const apps = [
    {
        name: "Calculator",
        description: "App for Android",
        icon: "https://media.istockphoto.com/id/1470926869/vector/calculator-icon-vector-on-white-background-savings-finances-sign-economy-calculate-for-ui-ux.jpg?s=612x612&w=0&k=20&c=eKuFOmQyAxxKfAMeD-h2gSJEh_ctNdWuNPPn2-E1Gno=",
        download: "https://drive.google.com/file/d/1u7LoWE8NgfY5TBFwtn9oqvpNk_MP7Wwz/view?usp=drive_link"
    },
    {
        name: "Notes App",
        description: "Take Notes Easily",
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
        download: "https://drive.google.com/file/d/ANOTHER_LINK/view?usp=drive_link"
    },
    {
        name: "Weather App",
        description: "Check Weather Forecast",
        icon: "https://cdn-icons-png.flaticon.com/512/1116/1116453.png",
        download: "https://drive.google.com/file/d/YOUR_LINK/view?usp=drive_link"
    },
    {
        name: "ToDo App",
        description: "Organize Your Tasks",
        icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
        download: "https://drive.google.com/file/d/YOUR_LINK/view?usp=drive_link"
    }
];

// Render apps dynamically
const appsGrid = document.getElementById("apps-grid");

apps.forEach(app => {
    const card = document.createElement("div");
    card.classList.add("app-card");
    card.innerHTML = `
        <img src="${app.icon}" alt="${app.name} Icon">
        <h3>${app.name}</h3>
        <p>${app.description}</p>
        <a href="${app.download}" target="_blank" class="download-btn">Download</a>
    `;
    appsGrid.appendChild(card);
});
