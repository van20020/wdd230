document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');

    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        banner.classList.add('show');
    }

    closeButton.addEventListener('click', function () {
        banner.classList.add('hide');
        banner.addEventListener('transitionend', function () {
            banner.style.display = 'none';
        }, { once: true });
    });
}); 
