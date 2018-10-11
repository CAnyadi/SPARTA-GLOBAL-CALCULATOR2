// alert("Please enter the value of your first number")
// var cal {
//
//   num1:""
//   prompt ("Please enter the value of your second number")
//   num2: ""
//   prompt ("Please enter you operation: +,-,*,/")
//     operation: [action: + result: num1+num2;
//                 action:-  result:num1-num2 ;
//                 action: * result:num1*num2;
//                 action:/ result:num/num2
//   ]
// }
// var cal{
//
//   // num1:""
//
//   // num2:""
//
// }


function add(num1,num2){
  var num1 = parseInt(prompt ("Please enter the value of your first number"));
  var num2 = parseInt(prompt ("Please enter the value of your second number"));
  total = num1+num2;
    console.log(total);
}
add();

function sub(num1,num2){
  var num1 = parseInt(prompt ("Please enter the value of your first number"));
  var num2 = parseInt(prompt ("Please enter the value of your second number"));
  total = num1-num2;
    console.log(total);
}
sub();
// I want there to be a bit of a delay between the third question and the total
// undefined keeps coming up and I don't know why
function multiply(num1,num2){
  var num1 = parseInt(prompt ("Please enter the value of your first number"));
  var num2 = parseInt(prompt ("Please enter the value of your second number"));
  total = num1*num2;
    console.log(total);
}
// multiply();

function divide(num1,num2){
  var num1 = parseInt(prompt ("Please enter the value of your first number"));
  var num2 = parseInt(prompt ("Please enter the value of your second number"));
  total = num1*num2;
    console.log(total);
}
// divide();

// var cal = {
//   question1:parseInt(prompt("Please enter your first value")) , question2: "Please enter your first value", question3: "Enter operation using these symbols: +,-,*,/"
//   operation:[action:"plus" result:"hello"
//             action:"subtract" result:"hello"]// }

function questions (){
  // num1= parseInt(prompt("Please enter the value of your first number"));
  // num2= parseInt(prompt("Please enter the value of your second number"));
  q3= prompt("Please enter your operation:add, sub, divide ,multiply");
}

// questions (add);
questions (sub);
// setTimeout (sub,1500);
questions(add);
// not sure how to make the answer affect the function called
// when sub selected call the sub function
