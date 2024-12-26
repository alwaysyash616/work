console.log("always-yash");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// // boxes[3].style.backgroundColor = "red";
// let box4 = document.getElementById("thistle");
// box4.style.backgroundColor = "thistle";

// document.querySelector(".box").style.backgroundColor = "green";     // sets only first element with class "green"
// document.querySelectorAll(".box").style.backgroundColor = "green";  // error It will not do what everyone thinks on his first time in JS

// we can do .style of an element. Not of an ARRAY, or STRING

document.querySelectorAll(".box").forEach((e) => {                      // this function returns an html collection which is like array
    // console.log(e);
    e.style.backgroundColor = "aquamarine";
})                                                                      // Yes, we can use tranditional for loop or Any loop
// this is used many many times in web development
// we do not need to remember weather a method or function returns NodeList or HTML-Collection


console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByName(""));

//element.matches()
//element.closest()
//element.containes()