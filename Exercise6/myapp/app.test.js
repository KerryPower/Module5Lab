const request = require('supertest');
const app = require('./app');
describe('Calculator Routes', () => {
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);
    test('GET /calculator/add => sum of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 + number2)
                });
            });
    });
    test('GET /calculator/subtract => subtraction of numbers', () => {
        return request(app)
            .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 - number2)
                });
            });
    });
    test('GET /calculator/multiply => multiple of numbers', () => {
        return request(app)
            .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 * number2)
                });
            });
    });
    test('GET /calculator/divide => division of numbers', () => {
        return request(app)
            .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 / number2)
                });
            });
    });

});