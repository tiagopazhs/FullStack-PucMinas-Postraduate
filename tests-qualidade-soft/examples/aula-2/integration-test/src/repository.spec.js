const EventRepository = require("./repository");
const {MongoClient} = require("mongodb");

describe("EventRepository", () => {

    let repository;
    let client;

    beforeAll(async() => {
        const dsn = 'mongodb://root:root@localhost?retryWrites=true&writeConcern=majority'
        client = new MongoClient(dsn);
        await client.connect();
        const collection = client.db('app_db').collection('events');
        repository = new EventRepository(collection);
    });

    //close db connection after all
    afterAll(async() => {
        await client.close();
    });

    beforeEach(async() => {
        await repository.deleteAll();
    });

    test("repository should create a new event (C)", async () => {

        const result = await repository.create({
            name: 'Rock in Rio',
            date: '2024-02-07'
        })

        //containing just a part of the object 
        expect(result).toStrictEqual(expect.objectContaining({
            name: 'Rock in Rio',
            date: '2024-02-07'
        }));

        const events = await repository.findAll();

        expect(events.length).toBe(1);
    
    })

    test('Respository must show all events (R)', async () => {

        await repository.create({
            name: 'Rock in Rio',
            date: '2024-02-07'
        })

        const result = await repository.findAll();

        expect(result.length).toBe(1);

        expect(result[0]).toStrictEqual(
            expect.objectContaining(
                {
                    name: 'Rock in Rio',
                    date: '2024-02-07'
                }
            )
        )

    });

    test.todo('Respository must update an event (U)');
    test.todo('Respository must delete an event (D)');
});