const firstName = "logeshwari";
const present = "student";
const birthYear = 2006;
const year = 2023;

const logi = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + present + '!';
console.log(logi);

const logiNew = `I' m ${firstName}, a ${year - birthYear}  years old ${present} !`;
console.log(logiNew);

console.log(`string with /n/
multiple 
/n/ lines`)

const age = 17;
if (age >= 18){
    console.log('logeshwari can start driving license');
   
} else {
    const yearsLeft = 18 - age;
    console.log(`logeshwari is too young.wait another ${yearsLeft} years: )`);
}
let century;
if (birthYear <= 2000){
century = 20;
} else {
    century = 21;
}
console.log(century);
