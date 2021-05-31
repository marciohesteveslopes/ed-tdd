function soma(a, b) {
    return a + b
}

function checaArray(arr, num) {
    let indice = arr.indexOf(num)
    //console.log("console "+ num)
    if (indice != -1)
        return num
    else   
        return -1
}

function checaObjeto(obj, prop) {
    if (obj.hasOwnProperty(prop)) 
        return prop
    else
        return -1;
}

function testaRegex(regex, frase) {
    
}


module.exports = {soma, checaArray, checaObjeto}