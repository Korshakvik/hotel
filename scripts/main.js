const btns = document.querySelectorAll(".btn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector('.callback-form');
const body = document.querySelector('body');
const moreInfoBtns = document.querySelectorAll('.more__info');

console.log(overlay);
console.dir(overlay);
console.log(btns);


btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        overlay.style.display = 'flex';
        body.style.overflow = 'hidden';
    })
})

form.addEventListener ('click', function(e){
e.stopPropagation();
})

overlay.addEventListener('click', function(){
    overlay.style.display='none';
    body.style.overflow = 'auto';
})



function openCallbackForm() {
    form.style.display = 'block';
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
  }
  
  moreInfoBtns.forEach(function(btn) {
    btn.addEventListener('click', openCallbackForm);
  });
  
  
  



  function validateForm() {
    var nameInput = document.getElementsByName('имя')[0];
    var emailInput = document.getElementsByName('email')[0];
    var phoneInput = document.getElementsByName('номертелефона')[0];
    
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
        alert('Заповніть всі обов\'язкові поля');
        return false;
    }
    
    return true;
}


