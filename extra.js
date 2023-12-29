let ltdk = document.getElementById('light-dark');
let ltdklbl = document.getElementById('ltdk-label');
let logo = document.getElementsByClassName('logo')[0];
let title = document.getElementsByClassName('fs-4 title')[0];

ltdk.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    if (String(ltdklbl.textContent).startsWith('Light')) {
        ltdklbl.innerHTML = 'Dark <i class="bi bi-lightbulb-fill"></i>';
        logo.setAttribute('src', '.\/logoinv.png');
        title.className = 'fs-4 title text-light';
        document.getElementsByClassName('p-5 mb-4 bg-light rounded-3')[0].className = 'p-5 mb-4 bg-dark rounded-3';
    }
    else {
        ltdklbl.innerHTML = 'Light <i class="bi bi-lightbulb"></i>';
        logo.setAttribute('src', '.\/logo.png');
        title.className = 'fs-4 title';
        document.getElementsByClassName('p-5 mb-4 bg-dark rounded-3')[0].className = 'p-5 mb-4 bg-light rounded-3';
    }
});