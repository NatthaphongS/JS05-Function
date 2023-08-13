// ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius

// F => C
farenheit=prompt('Enter temperature in farenheit')
const changeTempFtoC = f => (f-32)/1.8;
alert(`Temp ${changeTempFtoC(farenheit).toFixed(2)} celsius`);
