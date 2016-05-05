var frisby = require('frisby');
var url = require('../config.js').url;

frisby.create('GET all notes')
  .get(url + '/api/notes/')
  .expectStatus(200)
  .expectHeader('Content-Type', 'application/json; charset=utf-8')
  .expectJSON({
    'firstNote': 'Once upon the first note'
  })
  .toss();

frisby.create('POST new note')
  .post(url + '/api/notes/create', {
    'createdNote': 'There was a created note.'
  })
  .expectStatus(200)
  .toss();

frisby.create('GET a page that doesn\'t exist')
  .get(url + '/non-existant-page')
  .expectStatus(404)
  .toss();
