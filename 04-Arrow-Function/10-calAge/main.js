// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

//if leapyear +366day 
//else +365day
const isLeapYear = year => {
    return year % 100 === 0 ? year % 400 ==0 : year % 4 == 0;
}

let birthYear = 1997 ;
let sumDayAge = 0 ;

for (i=birthYear; i<=2022; i++){
    if(isLeapYear(i)){
        sumDayAge += 366;
    }
    sumDayAge += 365;
}
console.log(sumDayAge)
