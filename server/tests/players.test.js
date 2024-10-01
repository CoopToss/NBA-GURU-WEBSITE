const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Player = require('../models/Player');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterEach(async () => {
    await Player.deleteMany({});
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('GET /players', () => {
    it('should return an empty array when no players exist', async () => {
        const res = await request(app).get('/players');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    it('should return all players', async () => {
        const player = new Player({
            name: 'LeBron James',
            team: 'Lakers',
            position: 'Forward',
            stats: { points: 27.2, assists: 7.4, rebounds: 7.4 },
            socialMedia: { Instagram: '@kingjames' },
            highlights: ['https://youtu.be/mUyzyIgzVpI?si=TwP-3h5mLn5xKojO']
        });
        await player.save();

        const res = await request(app).get('/players');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].name).toBe('LeBron James');
    });
});

describe('POST /players', () => {
    it('should create a new player', async () => {
        const newPlayer = {
            name: 'Stephen Curry',
            team: 'Warriors',
            position: 'Guard',
            stats: { points: 29.5, assists: 6.3, rebounds: 5.4 },
            socialMedia: { Instagram: '@StephenCurry30' },
            highlights: ['https://youtu.be/BfoseIWRgR4?si=FR3pHMxyL7vHW8ZN']
        };

        const res = await request(app).post('/players').send(newPlayer);
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Stephen Curry');
    });

    it('should return 400 if required fields are missing', async () => {
        const res = await request(app).post('/players').send({
            team: 'Warriors',
            position: 'Guard'
        });

        expect(res.statusCode).toBe(400);
    });
});
