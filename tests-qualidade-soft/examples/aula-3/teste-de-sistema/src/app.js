const EventRepository = require("./repository");
const express = require('express');
const Container = require("./container");

const app = express();
app.use(express.json());
app.set('container', new Container());

app.get('/events', async (request, response) => {

    const repository = await app.get('container').getRepository();
    const events = await repository.findAll();

    response.json(events);
});

app.post('/events', async (request, response) => {

    const repository = await app.get('container').getRepository();

    try {
        const event = await repository.create(request.body);
        response.status(201).json(event);
    } catch (e) {
        response.status(500).json({error: e.message});
    }

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
            response.json(event);
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
        response.json(newEvent);
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