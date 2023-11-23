let mark_mass = 95;
let john_mass = 85;
let mark_height= 1.88;
let john_height = 1.76;
bmi_mark= mark_mass /mark_height ** 2 
bmi_john = john_mass /john_height ** 2 

let markHightBMI = (bmi_mark > bmi_john);

console.log(bmi_mark,bmi_john);
console.log(markHightBMI);
console.log('');

console.log('');

if (bmi_mark < bmi_john) {
    console.log("John's BMI is higher than Mark's!")

}else{
   console.log("Mark's BMI is higher than John's!")
}


if (bmi_mark < bmi_john) {
    console.log(`John's BMI is(${bmi_john}) higher than Mark's (${bmi_mark})!`)

}else{
   console.log(`Mark's BMI is (${bmi_mark}) higher than John's (${bmi_john})!`)
}
