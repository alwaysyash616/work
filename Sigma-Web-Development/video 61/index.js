let random = Math.random();
console.log(random);

let a = prompt(`Enter First Number`);
let c = prompt(`Enter Operation to perform`);
let b = prompt(`Enter Second Number`);


let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random > 0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);            //It is said that its not good to use eval() in production website.
}
else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);            //It is said that its not good to use eval() in production website.
}
