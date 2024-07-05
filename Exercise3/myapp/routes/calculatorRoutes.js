const express = require('express');
const router = express.Router();
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
})
router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let multiple = number1 * number2
    console.log(multiple)
    res.status(200)
    res.json({ result: multiple })
})
router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let subtraction = number1 - number2
    console.log(subtraction)
    res.status(200)
    res.json({ result: subtraction })
})
router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let division = number1 / number2
    console.log(division)
    res.status(200)
    res.json({ result: division })
})
module.exports = router;