use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "Price": "100000",
    "Instructor": "MySirG"
  },
  {
    "name": "Python",
    "Price": "80000",
    "Instructor": "CodeWithHarry"
  },
  {
    "name": "JavaScript",
    "Price": "60000",
    "Instructor": "Traversy Media"
  },
  {
    "name": "C++",
    "Price": "70000",
    "Instructor": "Abdul Bari"
  },
  {
    "name": "Django",
    "Price": "90000",
    "Instructor": "Corey Schafer"
  },
  {
    "name": "React",
    "Price": "75000",
    "Instructor": "Academind"
  },
  {
    "name": "Angular",
    "Price": "85000",
    "Instructor": "Maximilian Schwarzmüller"
  },
  {
    "name": "Flutter",
    "Price": "95000",
    "Instructor": "The Net Ninja"
  },
  {
    "name": "SQL",
    "Price": "55000",
    "Instructor": "Kudvenkat"
  },
  {
    "name": "HTML & CSS",
    "Price": "40000",
    "Instructor": "FreeCodeCamp"
  }
]
);

// Print a message to the output window.
console.log(`Done Inserting Data`);

