const EventRepository = require("../../src/repository");

describe("Repository unit test", () => {
    test('findAll', async () => {

        const collection = {
            find: jest.fn()
        };

        const repository = new EventRepository(collection);

        collection.find.mockReturnValue({
            toArray: () => [{
                name: 'Rock in Rio',
                date: '2024-01-01'
            }]
        });

        const events = await repository.findAll();

        expect(events[0]).toStrictEqual(expect.objectContaining({
            name: 'Rock in Rio',
            date: '2024-01-01'
        }))

    });
})