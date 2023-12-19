function numberDoubler(num) {
    while(num < 100){
        num *= 2
    } return num
} 

function stringRepeater(str) {
   let str2 = ""   //can make equal to str instead of ''
    while(str2.length < 10){
        str2 = str + str2    //str2 += str
    } return str2
}

// //while(str.length < 10){
//     str = str + str  ---> will double string making it longer & messing up values
// }


function makeDivisible(x, y) {
   while(x % y !== 0){
    x = x + 1  //x++
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