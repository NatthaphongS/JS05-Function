
function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) answer=answer+`${num}, `;
    // แปลงส่วนนี้เพื่อใช้ในการแสดงค่าจำนวนเฉพาะให้อยู่ในบรรทัดเดียว
}

// checkPrime(7);
// checkPrime(13);
// checkPrime(61);
// checkPrime(63);
// checkPrime(83);
let answer="";
//get function checkprime(from lab04) to use in printprime
function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }
    console.log(answer)
}
printPrime(71);
// checkPrime(2);
// checkPrime(3);
// checkPrime(4);
// checkPrime(5);
// checkPrime(6);
// checkPrime(7);
// checkPrime(8);
// checkPrime(9);
// checkPrime(10);
// checkPrime(11);
// checkPrime(12);
// checkPrime(13);

// ABSTRACTION
// - simple ideas => one idea
// - hiding complexity
// - simple interaction


//return logic
// function isPrime(num) {
//     // let isPrime = true;
//     for (let d = 2; d < num; d++) {
//         if (num % d == 0) {
//             // isPrime = false;
//             // break;
//             return false;
//             // reture ใช้แทนเบรคได้ด้วย
//             // ถ้าเข้า if function จะหยุดทำงานด้วยเลย
//         }
//     }
//     // if (isPrime) console.log(num);
//     return true;
// }