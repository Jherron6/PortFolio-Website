"use strict";
document.addEventListener("DOMContentLoaded", () => {
    
    // Dark mode toggle functions
    let darkMode = document.getElementById("darkMode");

    let applyDarkModePreference = () => {
        let darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
        if (darkModeEnabled) {
            document.body.classList.add("darkMode");
        }else {
            document.body.classList.remove("darkMode");
        }
    };

    let toggleDarkMode = () => {
        let darkModeEnabled = document.body.classList.toggle("darkMode");
        localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
    };

    applyDarkModePreference();

    if (darkMode) {
        darkMode.addEventListener("click", toggleDarkMode);
    } else {
        console.error("#darkMode not found");
    }

    // Auto Update Copy Year In Footer
    document.getElementById("year").textContent = new Date().getFullYear();
});