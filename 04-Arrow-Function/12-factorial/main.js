// ให้เขียนฟังก์ชันคำนวณค่า factorial

let result = 1;

const fac = num =>{
    for(i=num; i>=1; i--){
        result *= i;
    }
    return result
}

console.log(fac(5));
