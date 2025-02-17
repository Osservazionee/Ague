document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[data-section]');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = e.target.getAttribute('data-section');

            // Nascondi tutte le sezioni
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Mostra la sezione selezionata con animazione verticale
            const activeSection = document.getElementById(target);
            activeSection.classList.add('active');
        });
    });
});
