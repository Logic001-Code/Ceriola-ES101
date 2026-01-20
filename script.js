const regionLinks = document.querySelectorAll('.region-link');

regionLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 

        const destination = link.getAttribute('href');

        setTimeout(() => {
            window.location.href = destination;
        }, 500); 
    });
});
