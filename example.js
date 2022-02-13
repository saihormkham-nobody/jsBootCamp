const funA = () =>{
    funA();
    return "A";
}

const funB = () =>{
    console.log("B");
}

const char = funA();
console.log(char);