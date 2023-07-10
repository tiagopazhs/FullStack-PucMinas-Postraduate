const fibonacci = require("./fibonacci");

const data = [[1,1], [2,1], [3,2], [4, 3], [5,5], [6,8], [7,14], [8,21]];

describe.each(data)("Sequencia de Fibonacci", (termo, expected) => {
    test(`O ${termo}o elemento da sequencia deve ser ${expected}`, () => {
        expect(fibonacci(termo)).toBe(expected);
    });
});