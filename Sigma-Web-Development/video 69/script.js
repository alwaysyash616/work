let n = 4;

function factorial(number){
    let arr = Array.from(Array(number+1).keys());
    // console.log(arr.splice(1,));
    let c = arr.splice(1,).reduce((a,b) => {
        return a*b;
    })
    console.log(`Factorial of ${number} is ${c}`);    
}
factorial(n);


// let factorial = 1;
// while (n >= 1) {
//     factorial = factorial * n;
//     n--;
// }
// console.log(factorial);


// let array = [];
// for (let i = n; i > 0; i--) {
//     array.unshift(i);
// }
// const fac = (a,b) => {
//     return a*b;
// }
// console.log(`Factorial of ${n} is ${array.reduce(fac)}`);


// let arr2 = [1,2,3,4,5,6];
// const red = (a,b)=>{
//     return a+b;
// }
// console.log(arr2.reduce(red));