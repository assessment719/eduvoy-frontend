const loginbtn = document.getElementById('loginbtn');
const registrationbtn = document.getElementById('registrationbtn');
const goToregistration1 = document.getElementById('goToregistration1');
const goToregistration2 = document.getElementById('goToregistration2');
const goToregistration34 = document.getElementById('goToregistration34');
const login = document.getElementById('login');
const registration = document.getElementById('registration');
const registration1 = document.getElementById('registration1');
const registration2 = document.getElementById('registration2');
const registration3 = document.getElementById('registration3');
const registration4 = document.getElementById('registration4');
const regdEmail = document.getElementById('regdEmail');
const regdOTP = document.getElementById('regdOTP');
const warning = document.querySelector("#registration1 p")

loginbtn.addEventListener('click', function () {
    loginbtn.classList.add('active');
    registrationbtn.classList.remove('active');
    login.style.display = 'block';
    registration.style.display = 'none';
    registration1.style.display = 'none';
    registration2.style.display = 'none';
    registration3.style.display = 'none';
    registration4.style.display = 'none';
});

registrationbtn.addEventListener('click', function () {
    loginbtn.classList.remove('active');
    registrationbtn.classList.add('active');
    login.style.display = 'none';
    registration.style.display = 'block';
    registration1.style.display = 'none';
    registration2.style.display = 'none';
    registration3.style.display = 'none';
    registration4.style.display = 'none';
});

goToregistration1.addEventListener('click', function (event1) {
    event1.preventDefault();
    let regdEmailId = regdEmail.value;
    if (regdEmailId.trim() !== "") {
        registration.style.display = 'none';
        registration1.style.display = 'block';
        regdEmail.value = "";
    }
});

goToregistration2.addEventListener('click', function (event2) {
    event2.preventDefault();
    
    let regdOTPnum = parseInt(regdOTP.value);
    
    if (regdOTPnum === 268272) {
        registration1.style.display = 'none';
        registration2.style.display = 'block';
        regdOTP.value = "";
        warning.innerHTML = "An 6 Digit OTP Has Been Send To Your Email Id.";
    } else if (regdOTP.value === "") {
        warning.innerHTML = "OTP cannot be empty. Please enter the OTP.";
    } else {
        warning.innerHTML = "Entered The Wrong OTP. Send Again?";
        regdOTP.value = "";
    }
});

goToregistration34.addEventListener('click', function (event2) {
    event2.preventDefault();
    
    if (userType.value === "Student") {
        registration2.style.display = 'none';
        registration3.style.height = '440px';
        registration3.style.display = 'block';
        userType.value = "I Am A Student";
    } else if (userType.value === "Recruitment Partner") {
        registration2.style.display = 'none';
        registration4.style.height = '650px';
        registration4.style.display = 'block';
        userType.value = "I Am A Student";
    }
});

const eyeconbtn1 = document.getElementById('eyeconbtn1');
const password1 = document.getElementById('password1');
const on1 = document.getElementById('on1');
const off1 = document.getElementById('off1');

let isVisiable1 = true;

eyeconbtn1.addEventListener('click', function () {
    if (isVisiable1) {
        password1.type = 'text';
        on1.style.display = 'none';
        off1.style.display = 'flex';
        isVisiable1 = false;
    } else {
        password1.type = 'password';
        on1.style.display = 'flex';
        off1.style.display = 'none';
        isVisiable1 = true;
    }
});

const eyeconbtn3 = document.getElementById('eyeconbtn3');
const password3 = document.getElementById('password3');
const on3 = document.getElementById('on3');
const off3 = document.getElementById('off3');

let isVisiable3 = true;

eyeconbtn3.addEventListener('click', function () {
    if (isVisiable3) {
        password3.type = 'text';
        on3.style.display = 'none';
        off3.style.display = 'flex';
        isVisiable3 = false;
    } else {
        password3.type = 'password';
        on3.style.display = 'flex';
        off3.style.display = 'none';
        isVisiable3 = true;
    }
});

window.onload = function () {
    registrationbtn.classList.add('active');
    isVisiable1 = false;
    isVisiable2 = false;
    isVisiable3 = false;
};