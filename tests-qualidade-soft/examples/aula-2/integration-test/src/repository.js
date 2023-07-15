class EventRepository {

    collection;

    constructor(collection) {
        this.collection = collection;
    }

    async create(event) {
        await this.collection.insertOne(event);
        return event;
    }

    async findAll() {
        return (await this.collection.find({})).toArray();
    }
    
}

module.exports = EventRepository;