const request = require('supertest');
const app = require('../src/app');

describe('FluentME API', () => {
  it('GET / deve retornar mensagem', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('FluentME');
  });

  it('GET /health deve retornar ok', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('ok');
  });

  it('GET /lessons deve retornar lista', async () => {
    const res = await request(app).get('/lessons');
    expect(res.statusCode).toBe(200);
  });
});