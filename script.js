document.addEventListener("DOMContentLoaded", () => {
    const translateBtn = document.getElementById("translate-btn");
    const contentEn = document.getElementById("content-en");
    const contentIt = document.getElementById("content-it");

    // Check localStorage for saved language preference, default to 'en'
    let currentLang = localStorage.getItem("lang") || "en";

    const updateLanguage = () => {
        if (currentLang === "it") {
            contentEn.style.display = "none";
            contentIt.style.display = "block";
            translateBtn.textContent = "it/en";
            document.body.lang = "it";
        } else {
            contentEn.style.display = "block";
            contentIt.style.display = "none";
            translateBtn.textContent = "en/it";
            document.body.lang = "en";
        }
    };

    // Initialize display
    updateLanguage();

    // Toggle language on click
    translateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentLang = currentLang === "en" ? "it" : "en";
        localStorage.setItem("lang", currentLang);
        updateLanguage();
    });
});