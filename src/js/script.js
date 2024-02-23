const btn_submit = document.getElementById('btn_submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const m1 = document.querySelector('.m1');
const m2 = document.querySelector('.m2');

btn_submit.addEventListener('click', () => {
    if(email.value == '' && password.value == ''){
      m1.style.display = 'block';
    }else if(email.value == '' || password.value == ''){
        m1.style.display = 'block';
    }else {
        m2.style.display = 'block';
    }
})