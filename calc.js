// display content on calculator screen

function display(content){
    result.value += content;
}

// to clear calculator screen
function clearBox(){
    result.value =  ""
}

// to evaluate expression

function calc()
{
    try{
        result.value = eval(result.value)
    }
    catch{
        result.value="ERROR!!!"
    }
}

// to remove last character

function removeLast(){
    result.value =  result.value.slice(0,-1)
}