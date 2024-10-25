function checkIfEqual(a, b) {
    if (a === b) return "ტოლია"
    return "არ არის ტოლი"
}

function convertToCelsius(fahrenheit) {
    if (typeof fahrenheit === "number") return (fahrenheit - 32) / (9/5)
    return false
}

function calculate(a, b, operation) {
    if (typeof a !== "number" || typeof b !== "number") return false
    if (operation === "+") return a + b
    if (operation === "-") return a - b
    if (operation === "*") return a * b
    if (operation === "/") return a / b
    return false
}

console.log(checkIfEqual(3, 3))
console.log(checkIfEqual(3, "3"))
console.log(convertToCelsius(11))
console.log(convertToCelsius("11"))
console.log(calculate(1, 2, "/"))
console.log(calculate(1, 2, "8"))
console.log(calculate(1, "2", "/"))