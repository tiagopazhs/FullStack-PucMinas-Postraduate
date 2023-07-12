const { When, Then, Given, Before } = require('cucumber');
const assert = require('assert');
const app = require('../../src/app');
const container = app.get('container');
const request = require('supertest')(app);
const mongo = require("mongodb");

Before("@database", async function () {
    const repository = await container.getRepository();
    await repository.deleteAll();
});

Given('there is the event:', async (eventJson) => {
    const parsedEvent = JSON.parse(eventJson);
    if (parsedEvent.id) {
        parsedEvent._id = new mongo.ObjectId(parsedEvent.id);
        delete parsedEvent.id;
    }
    const repository = await container.getRepository();
    await repository.create(parsedEvent);
});

When('I send a {string} request to {string}', async (method, path) => {
    this.response = await request[method.toLowerCase()](path);
});

When('I send a {string} request to {string} with body:', async (method, path, body) => {
    this.response = await request[method.toLowerCase()](path)
        .set('content-type', 'application/json')
        .send(body);
});

Then('I should receive response code {int}', (statusCode) => {
    assert.equal(this.response.status, statusCode)
});

Then('the JSON response should be equal to:', (responseBody) => {
    assert.equal(JSON.stringify(this.response.body), JSON.stringify(JSON.parse(responseBody)));
});

Then('the response body be empty', () => {
    assert.deepEqual(this.response.body, {});
});

Then('print body', () => {
    console.info(this.response.body);
});