const Logger = require('./Logger');

class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1000);
        this.logger = new Logger(this.id);
    }

    add(num1, num2) {
        const result = num1 + num2;
        this.logger.log(result);
        return result;
    }

    subtract(num1, num2) {
        const result = num1 - num2;
        this.logger.log(result);
        return result;
    }

    multiply(num1, num2) {
        const result = num1 * num2;
        this.logger.log(result);
        return result;
    }

    divide(num1, num2) {
        const result = num1 / num2;
        this.logger.log(result);
        return result;
    }
}

module.exports = Calculator;