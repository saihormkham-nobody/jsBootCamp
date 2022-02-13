


const round = (num)=>{
    return Math.round((num + Number.EPSILON) * 100) / 100
}

const isValid = round(0.1 + 0.2) == round(0.3)
console.log(isValid)

// console.log(round(0.000256641247))
// console.log(round(0.012256641247))
// console.log(round(1.2246641247))
// console.log(round(112.2256641247))