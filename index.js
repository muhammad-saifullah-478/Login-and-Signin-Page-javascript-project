let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.name-filed');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');



signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'sign In';
    text.innerHTML = 'Lost password';
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    underline.style.transform = 'translatex(35px)'

});
signUpBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'sign Up';
    text.innerHTML = 'password suggestion';
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    underline.style.transform = 'translatex(0px)'

});
