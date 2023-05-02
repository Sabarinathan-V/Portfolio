let btn = document.querySelector('.toggle');
let icon = document.querySelector('.toggle i');
let body = document.querySelector('.hero-header');
let image = document.getElementById('myImage');

btn.onclick = function(){
    body.classList.toggle('light-theme');

    if(body.classList.contains('light-theme'))
    {
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
        image.src = './images/white.jpg'
    }
    else{
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
        image.src = './images/black.jpg';
    }
};

function openPdf(){
    const fileUrl = './pdf/cv.pdf';
    const win = window.open(fileUrl, '_black');
    win.focus();
}
