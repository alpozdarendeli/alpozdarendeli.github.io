window.addEventListener('DOMContentLoaded', () => {
    const load = (id, file) => {
        const el = document.getElementById(id);
        if (el) {
            fetch(file)
                .then(response => response.text())
                .then(html => { el.innerHTML = html; });
        }
    };
    load('header', 'header.html');
    load('footer', 'footer.html');
});
