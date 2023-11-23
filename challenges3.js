let Dolphins_score = (96 + 108 + 89)/3;
let Koalas_score = (88 + 91 + 110)/3;
console.log(Dolphins_score);
console.log(Koalas_score);
if (Dolphins_score > Koalas_score && Dolphins_score>=100){
console.log("Dolphin win the  gymnastics game")
} else if(Koalas_score > Dolphins_score && Koalas_score>=100){
    console.log("Koalas win the  gymnastics game")
} else if(Dolphins_score>=100 && Koalas_score>=100){
    console.log("Dolphin and Koalas are draw the  gymnastics game")
}else {
    console.log("No win the  gymnastics game ")
}