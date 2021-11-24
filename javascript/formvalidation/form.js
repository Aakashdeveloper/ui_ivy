function getEid(){
    var id = Math.floor(Math.random()*100000)
    document.getElementById('uid').value = id
}

let validateFname = () => {
    var name = document.getElementById('name').value;
    var mybody = document.getElementById('fname');
    
    if(name.trim().length==0){
        document.getElementById('fout').innerText="Please Enter First Name"
        mybody.classList.toggle("has-error");
    }else{
        document.getElementById('fout').innerText=""
        mybody.classList.toggle("has-error");
    }
}

function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.trim().length==0){
        document.getElementById('eout').innerText="Please Enter Email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") ==null){
            document.getElementById('eout').innerText="Please Enter Valid Email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

const validatePassword = () => {
    var pwd = document.getElementById('pwd').value;
    if(pwd.trim().length<15){
        if(pwd.trim().length<8){
            document.getElementById('pout').innerText="Min Length of password is 8"
            document.getElementById('ppout').style.display="block"
            document.getElementById('ppout').style.backgroundColor="red"
        }else if(pwd.length<11){
            document.getElementById('pout').innerText=""
            document.getElementById('ppout').style.backgroundColor="orange"
        }
    }else{
        document.getElementById('ppout').style.backgroundColor="green"
    }
}

const validateCPassword = () => {
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password Does not match "
    }else{
        document.getElementById('cpout').innerText=""
    }
    
}

function showPwd(){
    var pwd = document.getElementById('pwd')
    if(pwd.type== "password"){
        pwd.type="text"
    }else{
        pwd.type="password"
    }
}

const getCity = () =>{
    var city = document.getElementById('city').value;
    document.getElementById('cityout').innerText=`Your City is ${city}`
}