//Role Problem
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm("Did parents allow you?");
//     }
//   }

//V1. Use if but not else
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     return confirm("Did parents allow you?");
//   }

//V2. Use ? instead of if
// function checkAge(age) {
//     let result = age > 18 ? true:confirm('Did parent allow you');
//     return result;
//   }

//V3. Use || instead of if
function checkAge(age) {
    let result = age > 18 || confirm('Did parent allow you');
    return result
  }
checkAge(15);