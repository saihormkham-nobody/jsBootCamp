const student = {name: "Sai", age:5, sex:"male"}

console.log({...student, age:56});
// name, age

console.log({ age: 56, ...student,});
console.log({age:56, name: "Sai", age:5, sex:"male"});

console.log({name:"Sai", name:"Hello"});

// Min
// Max
// [1,2,3,4,5,6,7] = [[1,2],[3,4],[5,6],[7]]

// {x, y, z} , f(xly), x=>1
//{x:1,y:3,z:4}, f(x)=> {x:2,y:3,z:4}
// const a = {x:1,y:3,z:4}
