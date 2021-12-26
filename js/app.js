// condition & loop

// condition => if , else , elseif , switch
// loop => while , do-while , for

// looping

// var num = 1;
// // while(num<=10){           //check before statement
// //     console.log(num++);
// // }                           

// do{ 
//     console.log(num++);
// }while(num<=10);  //check after statement

// for (intialize;condition;{increment or decrement}){}
var startNum = parseInt(prompt("Enter first number"));
var endNum = parseInt(prompt("Enter second number"));

// for (startNum;startNum<=endNum;startNum++){
//     console.log(startNum);
// }

while(startNum<=endNum){
    console.log(startNum);
    startNum++;
}

