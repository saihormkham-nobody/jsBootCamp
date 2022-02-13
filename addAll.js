// const addAll = (list,logic) => {
//     let sum = list[0];
//     for (let index = 1; index < list.length; index++) {
//         sum = logic(sum,list[index]);
        
//     }
//     return sum;
// }

// const add = (a,b) => {
//     return a+b;
// }

// const multiply = (a,b) =>{
//     return a*b;
// }

// const list = [6,7,8]
// const sum = addAll (list,(a,b) => {
//     return (a*a)+(b*b);
// });
// console.log(sum);

const result = [6,7,8].reduce((a,b) => {
         return (a*a)+(b*b);
     });

console.log(result);