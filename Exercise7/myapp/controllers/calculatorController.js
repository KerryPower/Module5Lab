const Calculator = require('../libraries/Calculator');
let myCalc = new Calculator()

const addNumbers = ('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1,number2)
    res.status(200);
    res.json({ result: sum })
})
const multiplyNumbers = ('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let multiple = myCalc.multiply(number1,number2)
    res.status(200);
    res.json({ result: multiple })
})
const subtractNumbers = ('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let subtraction = myCalc.subtract(number1,number2)
    res.status(200);
    res.json({ result: subtraction })
})
const divideNumbers = ('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let division = myCalc.divide(number1,number2)
    res.status(200);
    res.json({ result: division })
})
module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}