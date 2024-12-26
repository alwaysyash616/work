console.log("This is Strings Tutorial")
// let a = "alwaysyash"
// for (let i = 0; i < 5; i++) {
//     console.log(a[i]);
// }
// console.log(a.length);


let p = "Yash"
let q = "Naveen"
console.log("His name is "+p+" and his brother's name is "+q)
console.log(`His name is ${p} and his brother's name is ${q}`)

// real_name="Yash"
// job="to live a great life"
let b="alwaysyash";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,5));
console.log(b.slice(1));
console.log(b.replace("always","ever"));    //only first occurence replaces
console.log(b.concat("is the boss"));
// console.log(b.trim());      I don't know WTF it does.
//strings are immutable
console.log(b);


console.log(b.indexOf("yash"));
console.log(b.indexOf("google"));