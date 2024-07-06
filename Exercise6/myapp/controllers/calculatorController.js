const addNumbers = ('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(sum);
    res.status(200);
    res.json({ result: sum })
})
const multiplyNumbers = ('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let multiple = number1 * number2;
    console.log(multiple);
    res.status(200);
    res.json({ result: multiple })
})
const subtractNumbers = ('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let subtraction = number1 - number2;
    console.log(subtraction);
    res.status(200);
    res.json({ result: subtraction })
})
const divideNumbers = ('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let division = number1 / number2;
    console.log(division);
    res.status(200);
    res.json({ result: division })
})
module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}