// condition & loop

// condition => if , else , elseif , switch
// loop => while , do-while , for


var status = prompt("Enter number from 1 to 3");
// if ( status == 1){
//     console.log("Morning");
// }else if( status==2){
//     console.log("Afternoon");
// }else if( status==3){
//     console.log("Night");
// }else{
//     console.log("Error number");
// }
// console.log("Have a nice day !");

switch(Number(status)){
    case 1:
        console.log("Morning");
        break;
    case 2:
        console.log("Afternoon");
        break;
    case 3:
        console.log("Night");
        break;
    default:
        console.log("Error Number");
        break;
}
console.log("Have a nice day");