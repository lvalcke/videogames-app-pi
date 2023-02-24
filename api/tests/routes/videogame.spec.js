/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name:"Lucho",
  description:"Hola soy Lucho",
  date:"1988-03-07",
  image:"https://serviciopad.es/wp-content/uploads/estudio-revela-que-estadounidenses-gastan-cada-vez-mas-en-videojuegos-02-e1445888221548.jpeg",
  raiting:4.5,
  platforms:"X-box, Playstation 2",
 
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});
