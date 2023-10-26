let menuIcon = document.querySelector('.barAws');
let burgerMenu = document.querySelector('.burgerMenu');
let closeMenu = document.querySelector('.fa-xmark');
//modale
let openModale = document.querySelectorAll('.openModale');
let closeModale = document.querySelectorAll('.closeStyle');

menuIcon.addEventListener('click',function (){
    burgerMenu.style.display='block';
})

closeMenu.addEventListener('click',function (){
    burgerMenu.style.display='none';
})

for (let i = 0; i < openModale.length; i++) {
        openModale[i].addEventListener('click',function(e){
        e.preventDefault();
        openModale[i].nextElementSibling.showModal();
        closeModale[i].addEventListener('click',function(e){
        e.preventDefault();
        closeModale[i].parentElement.close();
        })
    })
}