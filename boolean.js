let movie1 = 'leo'
let movie2 = 'vikram'
let movie3 = 'kaithi'
let movie4 ='rrr'
let lcu1 = ['leo','kaithi']
 
if ((lcu1.includes(movie1)) && (lcu1.includes(movie3))){
    console.log('lokesh movie director')
 
} else {
    console.log('lokesh not movies director')
}
let lcu2 = ['kaithi','rrr']
if ((lcu2.includes(movie2)) || (lcu2.includes(movie1))){
    console.log('true')
} else {
    console.log('false')
}
/*result = 0;
if (isNaN(result)) {
  console.log("The result is NaN");
} else {
  console.log("The result is a number");
}*/