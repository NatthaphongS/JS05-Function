function login(username,password){
    if(username=='admin' && password=='P@ssw0rd'){
        alert('Login Success');
    }
    else{
        alert('Login Fail');
    }
}
enterUsername= prompt('Please enter your username');
enterPassword= prompt('Please enter your password');
login(enterUsername,enterPassword);
