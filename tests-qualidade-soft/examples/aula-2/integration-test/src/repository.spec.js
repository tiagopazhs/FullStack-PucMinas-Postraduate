const EventRepository = require("./repository");

describe("EventRepository", () => {
    test("repository should create a new event", () => {

        const dsn = 'mongodb://root:root@localhost?retryWrites=true&writeConcern=majority'
        client = new MongoClient(dsn);
        await client.connect();
        const collection = client.db('app_db').collection('events');
        repository = new EventRepository(collection);

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