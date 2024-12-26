let a = [1,3,5,6,88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(a[index]);
// }

a.forEach((value,index,array)=>{
    console.log(value,index,array)
})

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
//     }
// }

// for (const element of a) {
//     console.log(element);
// }