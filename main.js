function b(num){
    let inp = document.getElementsByClassName('inp')[0].value
    inp += num
    document.getElementsByClassName('inp')[0].value = inp
}

function getsum(){
    let inp = document.getElementsByClassName('inp')[0].value 
    document.getElementsByClassName('inp')[0].value = eval(inp)
}