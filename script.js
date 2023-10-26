let nameF = document.querySelector('#formInputName');
let emailF = document.querySelector('#formInputEmail');
let numberF = document.querySelector('#formInputNumber');
let description = document.querySelector('#formInputDescription');
let form = document.querySelector('form');
var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//burger menu part
let menuIcon = document.querySelector('.barAws');
let burgerMenu = document.querySelector('.burgerMenu');
let closeMenu = document.querySelector('.fa-xmark');
//modal
let openModale = document.querySelector('#modale');
let closeModale = document.querySelector('.fa-xmark');
let modale = document.querySelector('#dialog');
//dropdown
let dropdn = document.querySelectorAll('.fa-caret-down');

// form validation:
console.log(form)
form.addEventListener('submit',function (event){
    event.preventDefault();

    if(nameF.value===""){
        nameF.nextElementSibling.style.display='block';
    }
    else {
        nameF.nextElementSibling.style.display='none';
    }
    if(emailF.value==="" || !emailF.value.match(regexEmail)){
        emailF.nextElementSibling.style.display='block';
    }
    else {
        emailF.nextElementSibling.style.display='none';
    }
    if (numberF.value==="" || numberF.value.length!==10) {
        console.log('work');
        numberF.nextElementSibling.style.display='block';
    }
    else {
        numberF.nextElementSibling.style.display='none';
    }
    if (description.value==="") {
        description.nextElementSibling.style.display='block';
    }
    else {
        description.nextElementSibling.style.display='none';
    }
})
// burger menu
menuIcon.addEventListener('click',function (){
    burgerMenu.style.display='block';
})

closeMenu.addEventListener('click',function (){
    burgerMenu.style.display='none';
})
// dropdown 
// dropdn.forEach( => {
    
// });

const controlDrop = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle('hide_drop');
}