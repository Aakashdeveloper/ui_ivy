function calc(opt){
    var out;
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value
    if(opt == "add"){
        out = Number(a)+Number(b)
    }else{
        out = Number(a)-Number(b)
    }
    document.getElementById('output').innerText = out
}
/*function add(){
    var out;
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value
    out = Number(a)+Number(b)
    document.getElementById('output').innerText = out

}
function sub(){
    var out;
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value
    out = a-b
    document.getElementById('output').innerText = out

}*/