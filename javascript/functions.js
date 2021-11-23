var a = 10;
var b = 20;
a+b
30

//es5
function add(a,b){
    return a+b
}

add(1,2)
3
add(4,9)
13
add('a','b')
'ab'

//es6
var add = (a,b) => { 
    return a+b 
}
add(1,2)
3


function isEven(userInput){
    var out;
    if(userInput%2 == 0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(5)
'Number 5 is odd'
isEven(10)
'Number 10 is even'