const links = document.querySelectorAll('.sidebar a');

links.forEach(link => {

    if (
        window.location.pathname.includes(
            link.getAttribute('href')
        )
    ) {
        link.classList.add('active');
    }

});