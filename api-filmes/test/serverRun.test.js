const request = require('supertest');
const assert = require('node:assert');
const { app } = require('../app.js');

describe('Test routes', ()=>{
    it('GET /', async ()=>{
        const response = await request(app)
            .get('/');

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('success');
    });
})
