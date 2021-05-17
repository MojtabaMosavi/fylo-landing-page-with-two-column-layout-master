const emailInput = document.querySelector("#email");
const emailInputSignUp = document.querySelector("#email-signup");
const errorHero = document.querySelector(".hero__form-error");
const errorSignUp = document.querySelector(".signup__form-error");

const formHero = document.getElementsByTagName("form")[0];
const formSignUp = document.getElementsByTagName("form")[1];



function validateEmail(email){
    const validator =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validator.test(email);
}

formHero.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!validateEmail(emailInput.value)){
        errorHero.classList.toggle('hero__form-error--active');
    }else{
        errorHero.classList.remove('hero__form-error--active');

    }
})

formSignUp.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!validateEmail(emailInputSignUp.value)){
        errorSignUp.classList.toggle('signup__form-error--active-w');
        console.log("www")
    }else{
        errorSignUp.classList.remove('signup__form-error--active-w');

    }
})