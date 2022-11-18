function display(num){
    result.value+=num  //+= otherwise contents on each input replaces
}

function allclear(){
    result.value=""
}
function evaluateExp(){
    // currentExp=result.value
    // result.value=eval(currentExp)

    result.value=eval(result.value)
}

function backspace(){

    result.value=result.value.slice(0,-1)
}