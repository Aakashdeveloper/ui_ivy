if(condition){
    // if condition pass
}else{
    // if condition fail
}

var a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM1104:3 Number 10 is even
undefined
var a = 11
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM1109:5 Number 11 is odd
6
var a =9
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisble by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}