function numberDoubler(num) {
    while(num < 100){
        num *= 2
    } return num
} 

function stringRepeater(str) {
   let str2 = "" 
    while(str2.length < 10){
        str2 = str + str2
    } return str2
}

function makeDivisible(x, y) {
  
   while(x % y !== 0){
    x = x + 1
   } return x
}

//check if evenly divisible
// /while(if not evenly divisible){
// +1
// }

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};