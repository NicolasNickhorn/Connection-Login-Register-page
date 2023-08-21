let login = document.querySelector(".form-login");
let register = document.querySelector(".form-register");



let emailLogin = document.querySelector("#emailLogin");
let spanEmail = document.querySelector(".email-box #spanEmailLogin");
let passwordLogin = document.querySelector("#passLogin");
let spanPassword = document.querySelector(".password-box #spanPasswordLogin");

let btnLogin = document.querySelector("#btnSubmitLogin");
btnLogin.addEventListener("click", e=>{
    if(emailLogin.value === ""){
        emailLogin.style.border = "1px solid red";
        spanEmail.style.display = "block";
    }else{
        emailLogin.style.border = "none";
        spanEmail.style.display = "none";        
    }

    if(passwordLogin.value.length <= "3"){
        passwordLogin.style.border = "1px solid red";
        spanPassword.style.display = "block";
    }else{
        passwordLogin.style.border = "none";
        spanPassword.style.display = "none";
        
    }

});

let emailRegister = document.querySelector("#emailRegister");
let spanEmailRegister = document.querySelector(".email-box #spanEmailRegister");
let passwordRegister = document.querySelector("#passRegister");
let passwordRegisterConfirm = document.querySelector("#passRegisterConfirm");
let spanPasswordRegister = document.querySelector(".password-box #spanPasswordRegister");
let spanConfirmPassword = document.querySelector(".password-box #spanConfirmPassword");



let btnRegister = document.querySelector("#btnSubmitRegister");
btnRegister.addEventListener("click", e=>{
    if(emailRegister.value === ""){
        emailRegister.style.border = "1px solid red";
        spanEmailRegister.style.display = "block";
    }else{
        emailRegister.style.border = "none";
        spanEmailRegister.style.display = "none";        
    }

    if(passwordRegister.value.length <= "3"){
        passwordRegister.style.border = "1px solid red";
        spanPasswordRegister.style.display = "block";
    }else{
        passwordRegister.style.border = "none";
        spanPasswordRegister.style.display = "none";
        
    }

    if(passwordRegisterConfirm.value === passwordRegister.value){
        spanConfirmPassword.style.display = "none";
        passwordRegisterConfirm.style.border = "none";
    }else{
        spanConfirmPassword.style.display = "block";
        passwordRegisterConfirm.style.border = "1px solid red";
        passwordRegister.style.border = "1px solid red";
    }
});


let toRegister = document.querySelector("#toRegister");
toRegister.addEventListener("click", t=>{
    login.style.display = "none";
    register.style.display = "block";
})

let toLogin = document.querySelector("#toLogin");
toLogin.addEventListener("click", t=>{
    register.style.display = "none";
    login.style.display = "block";
})