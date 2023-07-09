const greet = require('./greeting')

describe("Greeting", () => {
    test("Greeting the name specified name", () => {
        const message = greet('Toretto');
        expect(message).toBe('Hello Toretto, this is Brazil');
    });
    test("Greeting an empty name should return an exception", () => {
        const expression = () => greet('');
        expect(expression).toThrow("Greet don't allow empty names");
    });
    test("Greeting an undefined name should return an exception", () => {
        const expression = () => greet(undefined);
        expect(expression).toThrow("Greet don't allow undefined names");
    });
});
