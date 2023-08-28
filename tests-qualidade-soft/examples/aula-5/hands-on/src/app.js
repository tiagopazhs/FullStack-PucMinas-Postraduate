const express = require('express');
const Container = require("./container");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors({
    exposedHeaders: ['x-total-count'],
}));
app.set('container', new Container());

const normalizePk = (event) => {
    event.id = event._id;
    delete event._id;
    return event;
};

app.get('/events', async (request, response) => {
    const repository = await app.get('container').getRepository();
    const events = (await repository.findAll()).map(normalizePk);
    response.set('X-Total-Count', events.length);
    response.json(events);
});

app.post('/events', async (request, response) => {

    const repository = await app.get('container').getRepository();

    try {
        const event = await repository.create(request.body);
        response.status(201).json(normalizePk(event));
    } catch (e) {
        response.status(500).json({error: e.message});
    }

});

app.delete('/events', async(req, res) => {
    const repository = await app.get('container').getRepository();
    await repository.deleteAll();
    res.sendStatus(204);
});

app.get('/events/:id', async(request, response) => {
    
    const repository = await app.get('container').getRepository();

    try {
        const event = await repository.findById(request.params.id);

        if (event === null) {
            response.status(404).json({
                status: 404,
                error: 'Evento não encontrado'
            });
        } else {
            response.json(normalizePk(event));
        }
        
    } catch (e) {
        console.log(e);
        response.status(500).json({error: e.message});
    }
});

app.put('/events/:id', async(request, response) => {

    const repository = await app.get('container').getRepository();
    const event = await repository.findById(request.params.id);
    
    if (event === null) {
        response.status(404).json({
            status: 404,
            error: 'Evento não encontrado'
        });
    } else {
        const newEvent = {...event, ...request.body};
        await repository.update(newEvent);
        response.json(normalizePk(newEvent));
    }
});

app.delete('/events/:id', async(request, response) => {
    const repository = await app.get('container').getRepository();
    const event = await repository.findById(request.params.id);

    if (null !== event) {
        await repository.delete(event);
        response.sendStatus(204);
    } else {
        response.status(404).json({
            status: 404,
            error: 'Evento não encontrado'
        });
    }
});

module.exports = app;