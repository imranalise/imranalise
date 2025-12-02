// banner.js
// Small interactive touches for the banner (button ripple + focus + simple tracking)
// This file is optional but recommended for nicer UX.

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("getStarted");

    // quick click ripple
    btn.addEventListener("click", (e) => {
        // simple pulse animation using scale, then let the link proceed
        btn.animate([
            { transform: "scale(1)" },
            { transform: "scale(0.98)" },
            { transform: "scale(1)" }
        ], { duration: 260, easing: "cubic-bezier(.2,.9,.3,1)" });
    });

    // keyboard accessible focus styling enhancement
    btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            btn.classList.add("keyboard-pressed");
            setTimeout(() => btn.classList.remove("keyboard-pressed"), 220);
        }
    });
});

