// A ~ Excellent
// B ~ Good
// C ~ Not Bad
// D ~ Try Harder
// E ~ R.I.P

let grade = "D";

// if(grade == 'A'){
//     console.log("Excellent");
// } else if(grade == 'B'){
//     console.log("Good");
// } else if(grade == 'C'){
//     console.log("Not Bad");
// } else if(grade == 'D'){
//     console.log("Try Harder");
// } else if(grade == 'D'){
//     console.log("Rip");
// }else{
//     console.log("Invalid Grade");
// }

switch (grade) {
  case "A":
    console.log("Excellent");

    break;
  case "B":
    console.log("Good");

    break;
  case "C":
    console.log("Not Bad");

    break;
  case "D":
    console.log("Try Harder");

    break;
  case "E":
    console.log("Rip");

    break;

  default:
      console.log("Invalid Format");
    break;
}
