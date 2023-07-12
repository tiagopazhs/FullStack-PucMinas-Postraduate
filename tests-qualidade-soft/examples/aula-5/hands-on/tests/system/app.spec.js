const app = require('../../src/app');
const Container = require('../../src/container');
const request = require('supertest')(app);

describe('Event Management API', () => {

    let repository;
    let client;

    beforeAll(async() => {
        const container = new Container();
        client = container.getClient();
        repository = await container.getRepository();
    });

    afterAll(async() => {
        await client.close();
    });

    beforeEach(async() => {
        await repository.deleteAll();
    });

    describe('Endpoints de coleção', () => {
        test('GET /events', async () => {
            await repository.create({
                name: 'Rock in Rio',
                date: '2023-06-27'
            });

            const response = await request
                .get('/events')
                .expect('Content-type', /application\/json/);

            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBe(1);
            expect(response.body[0]).toStrictEqual(expect.objectContaining({
                name: 'Rock in Rio',
                date: '2023-06-27'
            }));
        });

        test('POST /events', async () => {
            const event = {
                name: 'Rock in Rio',
                date: '2023-06-27'
            };

            const response = await request.post('/events')
                .send(event);

            expect(response.statusCode).toBe(201);
            expect(response.body).toStrictEqual(expect.objectContaining(event));
        });
    });
    
    describe('Endpoints de item', () => {

        describe('GET /events/:id', () => {
            test('Deve retornar 200 para um evento existente', async() => {
                // 1. criar um evento
                const event = await repository.create({
                    name: 'Rock in Rio',
                    date: '2023-06-27'
                });
                
                // 2. fazer a chamada de detalhamento do evento
                const response = await request.get(`/events/${event._id}`)
                    // 3. verificar o header
                    .expect('Content-type', /application\/json/);

                // 4. verificar status code
                expect(response.statusCode).toBe(200);
                
                // 5. verificar body
                expect(response.body).toStrictEqual(expect.objectContaining({
                    name: 'Rock in Rio',
                    date: '2023-06-27'
                }));
            });
            
            test('Deve retornar 404 para um evento inexistente', async() => {
                // 1. fazer a chamada de detalhamento do evento
                const response = await request.get('/events/649b7a272150835d525b7335')
                    // 2. verificar o header
                    .expect('Content-type', /application\/json/);

                // 3. verificar status code
                expect(response.statusCode).toBe(404);
                
                // 4. verificar body
                expect(response.body).toStrictEqual({
                    status: 404,
                    error: 'Evento não encontrado'
                });
            });
        });

        describe('PUT /events/:id', () => {
            test('Deve retornar 200 para um evento existente', async() => {
                // 1. criar um evento
                const event = await repository.create({
                    name: 'Rock in Rio',
                    date: '2023-06-27'
                });

                // 2. fazer a chamada de atualização do evento
                const response = await request.put(`/events/${event._id}`)
                    .send({
                        name: 'Rock in Rio',
                        date: '2023-10-27'
                    })
                    // 3. conferir o header
                    .expect('Content-type', /application\/json/);
                
                // 4. conferir o status code
                expect(response.statusCode).toBe(200);

                // 5. conferir o body
                expect(response.body).toStrictEqual(expect.objectContaining({
                    name: 'Rock in Rio',
                    date: '2023-10-27'
                }));

                // 6. conferir se o evento foi atualizado no banco de dados.
                const newEvent = await repository.findById(event._id);
                expect(newEvent).toStrictEqual(expect.objectContaining({
                    name: 'Rock in Rio',
                    date: '2023-10-27'
                }));
            });

            test('Deve retornar 404 para um evento inexistente', async() => {
                // 1. fazer a chamada de detalhamento do evento
                const response = await request.put('/events/649b7a272150835d525b7335')
                    .send({
                        name: 'Rock in Rio',
                        date: '2023-10-27'
                    })
                    // 2. verificar o header
                    .expect('Content-type', /application\/json/);

                // 3. verificar status code
                expect(response.statusCode).toBe(404);
                
                // 4. verificar body
                expect(response.body).toStrictEqual({
                    status: 404,
                    error: 'Evento não encontrado'
                });
            });
        });

        describe('DELETE /events/:id', () => {
            test('Deve retornar 204 para um evento existente', async() => {

                // 1. criar um evento
                const event = await repository.create({
                    name: 'Rock in Rio',
                    date: '2023-06-27'
                });

                // 2. fazer a chamada de atualização do evento
                const response = await request.delete(`/events/${event._id}`);

                // 3. conferir o status code
                expect(response.statusCode).toBe(204);

                // 4. conferir o body
                expect(response.body).toStrictEqual({});

                // 5. conferir se o evento foi atualizado no banco de dados.
                const newEvent = await repository.findById(event._id);
                expect(newEvent).toBe(null);

            });

            test('Deve retornar 404 para um evento inexistente', async() => {
                // 1. fazer a chamada de detalhamento do evento
                const response = await request.delete('/events/649b7a272150835d525b7335')
                    // 2. verificar o header
                    .expect('Content-type', /application\/json/);

                // 3. verificar status code
                expect(response.statusCode).toBe(404);
                
                // 4. verificar body
                expect(response.body).toStrictEqual({
                    status: 404,
                    error: 'Evento não encontrado'
                });
            });
        });
    });
});