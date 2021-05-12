var number1 = 3;
var number2 = 7;
var estimatedAnswer = 9;

calculator(number1,number2,estimatedAnswer);

function calculator(entry1,entry2,userAnswer){
if ((entry1+entry2)==userAnswer){
  alert("Correct, "+entry1+"+"+entry2+"="+userAnswer);
}
else {
  alert("False, "+entry1+"+"+entry2+" does not = "+userAnswer);
}
}
