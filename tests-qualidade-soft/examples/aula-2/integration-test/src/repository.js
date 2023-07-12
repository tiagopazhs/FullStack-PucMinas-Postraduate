const mongo = require('mongodb');

class EventRepository {

    collection;

    async create(event) {
        await this.collection.insertOne(event);
        return event;
    }

module.exports = EventRepository;