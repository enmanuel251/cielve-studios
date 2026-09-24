console.log("Cielve Studios iniciado.");

document.addEventListener("DOMContentLoaded", () => {

    const year = new Date().getFullYear();

    document.querySelectorAll("footer p").forEach(element => {
        if (element.textContent.includes("©")) {
            element.textContent = `© ${year} Cielve Studios`;
        }
    });

});