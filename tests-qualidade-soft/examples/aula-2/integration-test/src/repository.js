class EventRepository {

    collection;

    constructor(collection) {
        this.collection = collection;
    }

    async create(event) {
        await this.collection.insertOne(event);
        return event;
    }
}

module.exports = EventRepository;