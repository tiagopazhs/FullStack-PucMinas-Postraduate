const Container = require("./container");

describe("EventRepository", () => {

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

    test('Repositório deve criar um novo evento (C)', async () => {
        const result = await repository.create({
            name: 'Rock in Rio',
            date: '2024-02-07'
        });

        expect(result).toStrictEqual(expect.objectContaining({
            name: 'Rock in Rio',
            date: '2024-02-07'
        }));

        const events = await repository.findAll();

        expect(events.length).toBe(1);
    });

    test('Repositório deve listar todos os eventos (R)', async () => {

        await repository.create({
            name: 'Rock in Rio',
            date: '2024-02-07'
        });

        const result = await repository.findAll();

        expect(result.length).toBe(1);

        expect(result[0]).toStrictEqual(
            expect.objectContaining({
                name: 'Rock in Rio',
                date: '2024-02-07'
            })
        );
    });

    test('Repositório deve atualizar um evento (U)', async() => {

        // 1. banco de dados deve estar vazio - ok
        // 2. inserir um evento - ok
        const event = await repository.create({
            name: 'Rock in Rio',
            date: '2024-02-07'
        });

        // 3. alterar o evento - ok
        event.date = '2024-08-20';
        await repository.update(event);
        
        // 4. certificar que o evento foi atualizado no banco de dados. - ok
        const result = await repository.findById(event._id);
        expect(result).toStrictEqual(expect.objectContaining({
            name: 'Rock in Rio',
            date: '2024-08-20'
        }));
    });

    test('Repositório deve remover um evento (D)', async() => {

        // 1. banco de dados deve estar vazio - OK
        // 2. deve existir um evento previamente cadastrado - OK
        const event = await repository.create({
            name: 'Rock in Rio',
            date: '2024-02-07'
        });
        
        // 3. remover o evento
        await repository.delete(event);

        // 4. certificar que o evento foi removido do banco de dados.
        const events = await repository.findAll();
        expect(events.length).toBe(0);
    });

    test('Repositorio não deve permitir remoção de evento sem id', async () => {

        const event = {
            name: 'Rock in Rio',
            date: '2024-08-20'
        };

        const expression = () => repository.delete(event);
        await expect(expression).rejects.toThrow('Evento invalido');
    });
});