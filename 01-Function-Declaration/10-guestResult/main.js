function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // show function sayHi
console.log(sayHi(10)); // undefined and aleart 'Hi kid' because sayHi(10) don't have return setting so it will return undefined after that console.log(undefined) will be undefined