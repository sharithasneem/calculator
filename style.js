
function clearScreen(){
    document.getElementById("output-screen").value=" "
}
function clickme(input){
    
    document.getElementById("output-screen").value+=input
}
function EqualButton(){
    var text = document.getElementById("output-screen").value
    var result1=eval(text)
    document.getElementById("output-screen").value=result1
}
function Del_lastno(){
    var current=document.getElementById("output-screen").value
    var outno=current.substring(0, current.length-1);
    document.getElementById("output-screen").value=outno

}