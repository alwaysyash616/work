// console.log("one")
// console.log("two")

// setTimeout(()=>{
//     console.log("Hello");
// }, 4000)                    //timeout; 4ms

// console.log("three")


// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// });

// function getData(dataId, getNextData) {
//     //2s
//     setTimeout((data) => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1);         //2s
// getData(2);         //2s
// getData(3);         //2s

// console.log("getting data 1 ...")
// getData(1, () => {
//     console.log("getting data 2 ...");
//     getData(2, ()=>{
//         console.log("getting data 3 ...");
//         getData(3, ()=>{
//             console.log("getting data 4 ...");                                      // Callback Hell
//             getData(4);                                                             // Pyramid of Doom
//         });
//     });
// });


let promise = new Promise((resolve, reject)=>{
    console.log("I am a promise");
});





















