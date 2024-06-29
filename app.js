const title = document.querySelector('#title');
const nameField = document.querySelector('#nameField');
const signInBtn = document.querySelector('#signInBtn');
const signupBtn = document.querySelector('#signupBtn');

signupBtn.addEventListener("click",function (){
   nameField.innerHTML="Sing Up";
   nameField.style.display = "block";
   
});

signInBtn.addEventListener("click",function (){
    nameField.innerHTML="Login";
    nameField.style.display = "none";
 });