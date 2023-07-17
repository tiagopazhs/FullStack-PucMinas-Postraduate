const mongo = require('mongodb');

function EventRepository(collection) {

    async function deleteAll() {
        await collection.deleteMany({});
    }
    
    async function create(event) {
        await collection.insertOne(event);
        return event;
    }
    
    async function findAll() {
        return (await collection.find({})).toArray();
    }
    
    async function update(event) {
        await collection.updateOne({ _id: event._id }, { $set: event });
    }
    
    async function findById(id) {
        return await collection.findOne({ _id: new mongo.ObjectId(id) });
    }
    
    async function deleteEvent(event) {
        if (event._id === undefined) {
            throw new Error('Invalid event');
        }
    
        await collection.deleteOne({ _id: event._id });
    }
    
    return {
        deleteAll,
        create,
        findAll,
        update,
        findById,
        deleteEvent
    };
    
}

module.exports = EventRepository;