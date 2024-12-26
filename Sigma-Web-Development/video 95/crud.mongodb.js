// CRUD Operations

use("CrudDb")
// CREATE
db.createCollection("courses")

// db.courses.insertOne({
//     name: "Yash",
//     age: 22,
//     dob: "23/12/2002",
//     address: "Bareilly"
// })

// db.courses.insertMany([
//     {
//         "name": "Aarav",
//         "age": 25,
//         "dob": "15/08/1998",
//         "address": "Lucknow"
//     },
//     {
//         "name": "Ishita",
//         "age": 30,
//         "dob": "10/04/1993",
//         "address": "Delhi"
//     },
//     {
//         "name": "Rohan",
//         "age": 28,
//         "dob": "05/09/1995",
//         "address": "Mumbai"
//     },
//     {
//         "name": "Priya",
//         "age": 26,
//         "dob": "22/11/1997",
//         "address": "Chennai"
//     },
//     {
//         "name": "Ananya",
//         "age": 24,
//         "dob": "14/02/1999",
//         "address": "Pune"
//     },
//     {
//         "name": "Kabir",
//         "age": 29,
//         "dob": "25/12/1994",
//         "address": "Hyderabad"
//     },
//     {
//         "name": "Meera",
//         "age": 27,
//         "dob": "08/03/1996",
//         "address": "Kolkata"
//     },
//     {
//         "name": "Aditya",
//         "age": 23,
//         "dob": "19/07/2000",
//         "address": "Jaipur"
//     },
//     {
//         "name": "Simran",
//         "age": 31,
//         "dob": "03/06/1992",
//         "address": "Ahmedabad"
//     },
//     {
//         "name": "Aryan",
//         "age": 21,
//         "dob": "12/01/2003",
//         "address": "Bhopal"
//     }
// ]
// )

// READ
// let a = db.courses.find({age: 21});
// console.log(a.toArray());

// let b = db.courses.findOne({age: 21});
// console.log(b);

// UPDATE
// db.courses.updateOne({age: 21}, {$set:{age: 30}});
// db.courses.updateMany({age: }, {$set:{age: 1000}});


// DELETE
db.courses.deleteOne({age: 22});
db.courses.deleteMany({age: 1000});

// https://www.mongodb.com/docs/manual/reference/operator/query/
