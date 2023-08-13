let enterNum = +prompt('Enter your Number');

function checkPrime(n){
    let isPrime =true;
    for(d=2; d<n; d++){
         if(n%d == 0) isPrime=false;
         break;
    }
    if(isPrime) alert(`Number ${n} is prime number`);
    else alert(`Number ${n} is not prime number`);
}

check(enterNum);