//this function clears all the values
function clearScreen() {
  document.getElementById("result").value = "";
}
//The clearScreen function access DOM by the id of the result and clear its value by assigning it an empty string

//This function displays values
function display(value) {
  document.getElementById("result").value += value;
}
//the display function access DOM by the id of the result and apends the value of the clicked btn to the rslt
//This function evaluates the expression and returns result
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value=q;
}
//eval=evaluates the expression , for example eval(2+2) returns 4

