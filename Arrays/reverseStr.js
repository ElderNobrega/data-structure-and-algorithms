/* 
Create a function that reverse string:
Hello, my name is Jhon Doe.
eoD nohJ si eman ym ,olleH
 */

//funtion that reverse string using JS built in functions
function reverse(str) {
    return str.split('').reverse().join('')
}

//function that reverse string using ES6 syntax
const reverse2 = str => str.split('').reverse().join('')

//function using spread operator..
const reverse3 = str => [...str].reverse().join('')

 //function that store str in array and return a reversed string
function reverse4(str) {
    let revStr = []
    if (!str || str.length < 2 || typeof str !== 'string') 
        return 'That is not good..'
    for (let i = str.length - 1; i >= 0; i--) {
        revStr.push(str[i])
    }
    console.log(revStr)
    return revStr.join('')
}

//function that already reverse str into string
function reverse5(str){
  let revStr = ''

  if (!str || str.length < 2 || typeof str !== 'string') {
      return 'That is not good.. '
  }
  for (let i = str.length - 1; i >=0; i--) {
    revStr += str[i]
  }
  return revStr
}

console.log(reverse3('Hello, my name is Jhon Doe'))