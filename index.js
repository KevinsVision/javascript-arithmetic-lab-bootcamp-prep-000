var a = 10
var b = 5

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(n) {
  return n += 1
}

function dec(n) {
  return n -= 1
}

function makeInt(n) {
  parseInt('2', 10)
  return n
}

function makeInt(n) {
  parseInt('0x2328')
  return n
}

function makeInt(n) {
  parseInt('Q23', 10)
  return n
}

function preserveDecimal(n) {
  parseFloat('80.25')
  return n
}

function preserveDecimal(n) {
  parseInt('2.222')
  return parseFloat(n)
}

/*function makeInt(n) {
  return n
}

function makeInt(n) {
  return parseInt(n)
}

function makeInt(n) {
  var a =  parseInt(10)
  var b = parseInt(5)
  return n
}

function makeInt(n) {
  parseInt('nonsense!')
}

function makeInt(n) {
  return parseInt(10)
}

function preserveDecimal(n) {
  return parseInt('nonsense!')
}
*/