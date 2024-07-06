class Logger {
    constructor(id) {
        this.id = id;
    }

    log(result) {
        let callerFunction = (new Error()).stack.split('\n')[2].trim().split(' ')[1];
        console.log(`[${callerFunction}:${this.id}]: ${result}`);
    }
}

module.exports = Logger;