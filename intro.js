const readline = require('readline')
console.log(`Hello, World`)
const firstName = `Ethan`
let age = 40
console.log(firstName, age)
let isCool = true
console.log(isCool)
isCool = false
console.log(isCool)
let height 
console.log(height)
let x = 4
let y = 10
let z = 10+4
let sum = x + y
console.log(x, y, z, sum)

let str ="string"
let str2 = 'string'
// let str3 = String
console.log(str, str2)
const lastName = `Bird`
const ethan = `${firstName} + ${lastName}`
console.log(ethan)

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout

})

reader.question(`Howdy, Whats Your name?`, function(answer){
  console.log(`hi ${answer}`)
})