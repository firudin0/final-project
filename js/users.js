const toggleButtons = document.getElementsByClassName('toggleButton');
    const singIn = document.getElementById('singIn');
    const singUp = document.getElementById('singUp');

    for (let i = 0; i < toggleButtons.length; i++) {
      toggleButtons[i].addEventListener('click', function () {
        if (singIn.style.display !== 'none') {
          singIn.style.display = 'none';
          singUp.style.display = 'block';
        } else {
          singIn.style.display = 'block';
          singUp.style.display = 'none';
        }
      });
    }







let registerForm = document.getElementById("registerForm")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")

async function getData() {
    await axios.get(`https://655c844f25b76d9884fd70a7.mockapi.io/users`)
        .then(res => {
            findData = res.data
        })
}

function postUser(e) {
    e.preventDefault()
    

    let data  = {
        email: email.value ,
        name: firstName.value ,
        lastName: lastName.value,
        password: password.value
    }
    if (findData.find(item => item.email === email.value)) {
        console.log("bu emaille artiq qeydiyyatdan kecilib");
        registerForm.reset()
    }else{
        axios.post(`https://655c844f25b76d9884fd70a7.mockapi.io/users`,data)
        registerForm.reset()
    }
}

registerForm.addEventListener("submit", postUser)

window.onload = () => {
    getData()
}






let loginForm = document.getElementById("loginForm")
let emailLogin = document.getElementById("emailLogin")
let passwordLogin = document.getElementById("passwordLogin")
let findData;

async function getData() {
    await axios.get(`https://655c844f25b76d9884fd70a7.mockapi.io/users`)
        .then(res => {
            findData = res.data;
        });
}

async function checkUser(e) {
    e.preventDefault();

    await getData();

    let checkEmail = findData.find(item => item.password === passwordLogin.value && item.email === emailLogin.value);

    if (checkEmail) {
      window.location.href="./home.html"
    } else {
      emailLogin.style.borderColor = "red"; 
      passwordLogin.style.borderColor = "red"; 
      emailLogin.placeholder = "Wrong email";
      passwordLogin.placeholder = "Wrong password"; 
      alert("Your e-mail or code is incorrect!")
    }
    loginForm.reset();
}

loginForm.addEventListener("submit", checkUser);