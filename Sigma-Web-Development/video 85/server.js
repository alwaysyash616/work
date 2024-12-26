var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)


//if you prefer something other then '-' as seprator
const b = slugify('some st&&*$$*(^$$^^&ring','_')   //some string
console.log(b)