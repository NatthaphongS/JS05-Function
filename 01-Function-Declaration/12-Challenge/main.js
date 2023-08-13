// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// ```js
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9
// ```

function findMax(a,b,c,d){
 
    //แบบ4input
    if(typeof(a)=='number' && typeof(b)=='number' && typeof(c)=='number' && typeof(d)=='number'){
        return Math.max(a,b,c,d);
    }
    //แบบ3input
    else if(typeof(a)=='number' && typeof(b)=='number' && typeof(c)=='number' && d==undefined){
        return Math.max(a,b,c);
    }
    //แบบ2input
    else if(typeof(a)=='number' && typeof(b)=='number' && c==undefined && d==undefined){
        return Math.max(a,b);
    }
    //แบบ1input
    else if(typeof(a)=='number' && b==undefined && c==undefined && d==undefined){
        return a
    }
    else if(a==undefined && b==undefined && c==undefined && d==undefined){
        return 'undefined';
    }
    else{
        return 'NaN';
    }
}
//Check
log= console.log;
log(findMax()); //undefined
log(findMax(5,10)); //10
log(findMax(10,4,8)); //10
log(findMax(-5,-8,0,-77)); //0
log(findMax(-5,-8,'hong',-77)); //NaN
log(findMax('Hong')); //NaN