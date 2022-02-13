// 6  ~ 12  Good Morning
// 12  ~ 17  Good Afternoon
// 17  Good Evening
prompt("What is the weather like?");
let currentTime = 2;

if(currentTime>=6 && currentTime<12){
    console.log("Good Morning");
}else if(currentTime>=12 && currentTime<17){
    console.log("Good Afternoon");
}else{
    console.log("Good Evening");
}