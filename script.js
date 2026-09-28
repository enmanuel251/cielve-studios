document.addEventListener("DOMContentLoaded", () => {

    // Página cargada
    document.body.classList.add("loaded");


    // Animación al aparecer elementos
    const elements = document.querySelectorAll(
        ".hero-content, .section-heading, .featured-content, .universe-content, .social-preview, .game-showcase, .project-card, .lore-text, .lore-elements article, .social-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach((element) => {
        observer.observe(element);
    });

});