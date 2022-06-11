const hamburger = document.querySelector('.toggler');
const list = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    list.classList.toggle('active');
    hamburger.classList.toggle('active');

});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
 hamburger.classList.remove('active');
 list.classList.remove('active');
}))

 