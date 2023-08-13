const checkPrime = n => {
    for(i=2; i<n; i++){
        if(n%i==0){
            return console.log(`${n} isn't prime number.`)
        }
    }
    return console.log(`${n} is prime number.`)
}
checkPrime(71);