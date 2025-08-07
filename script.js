
document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('section, header');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    containers.forEach(container => {
        container.classList.add('animate-on-scroll');
        observer.observe(container);
    });
});
