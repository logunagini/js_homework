// falsly 5 types 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('logu'));
console.log(Boolean({ }));
let firstName;
if (firstName) {
    console.log('logi is a girl');
} else {
    console.log('logi is smart');
}
 let money = 500;
 if (money) {
   console.log("Don't spend it all");
 } else {
    console.log("you should get a job")
 }
