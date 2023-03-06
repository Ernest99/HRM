let eyeShow = document.getElementById('eyeShow');
let passwordInput = document.getElementById('passwordInput');

eyeShow.addEventListener('click', () =>{
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text';
        eyeShow.classList.add('uil-eye-slash');
    }else{
        passwordInput.type = 'password';
        eyeShow.classList.remove('uil-eye-slash');
    }
});