const greet = require('./greeting')

describe("Greeting", () => {

    test("Greeting the name specified name", () => {
        const message = greet('Toretto');
        expect(message).toBe('Hello Toretto, this is Brazil');
    });

    test("Greeting an empty name should return an exception", () => {
        const message = () => greet('');
        expect(message).toThrow('Name cannot be empty');
    });
    
    test("Greeting an undefined name should return an exception", () => {
        const message = () => greet(undefined);
        expect(message).toThrow('Name cannot be undefined');
    });
});
