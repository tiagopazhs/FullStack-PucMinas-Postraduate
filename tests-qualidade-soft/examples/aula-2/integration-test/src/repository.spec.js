const EventRepository = require("./repository");

describe("EventRepository", () => {
    test("repository should create a new event", () => {

        const repository = new EventRepository();

        const result = repository.create({
            name: 'Rock in Rio',
            date: '2024-02-07'
        })

        expect(result).toStrictEqual({
            name: 'Rock in Rio',
            date: '2024-02-07'
        });
        

    })
});