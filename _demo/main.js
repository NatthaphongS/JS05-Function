// test push feedback branch
//update solution

// function sounfOfBird(){ 
//     console.log('เสียงงงง นกกรงหัวจุกมันริก');
//     console.log('จก ');
//     console.log('กวิ๊ก ๆๆๆๆๆ');
//     for(let i=1; i<= 11; i++){
//         console.log('กวิ๊ก');
//     }
// }
// sounfOfBird();
// sounfOfBird();
// sounfOfBird();

function isPrime(n){
    // let n=5;
    let isPrime =true;
    for(divider=2; divider<n; divider++){
         if(n%divider == 0) isPrime=false;
    }
    if(isPrime) console.log(`Number ${n} is prime number`);
    else console.log(`Number ${n} is not prime number`)
}
isPrime(10);
isPrime(7);
isPrime(73);