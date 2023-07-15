const EventRepository = require("./repository");
const {MongoClient} = require("mongodb");

describe("EventRepository", () => {
    test("repository should create a new event", async () => {

        const dsn = 'mongodb://root:root@localhost?retryWrites=true&writeConcern=majority'
        client = new MongoClient(dsn);
        await client.connect();
        const collection = client.db('app_db').collection('events');
        
        const repository = new EventRepository(collection);

        const result = await repository.create({
            name: 'Rock in Rio',
            date: '2024-02-07'
        })

        //containing just a part of the object 
        expect(result).toStrictEqual(expect.objectContaining({
            name: 'Rock in Rio',
            date: '2024-02-07'
        }));
        

    })
});