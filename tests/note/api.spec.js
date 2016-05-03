var frisby = require('frisby');
var url = require('../../config.js').url;

frisby.create('POST missing content')
  .post(url + '/note/create', {})
  .expectStatus(400)
  .expectJSON({
    'error': 'No content supplied.'
  })
  .toss();

frisby.create('Incorrect URL')
  .get(url + '/somethingrandom')
  .expectStatus(404)
  .expectJSON({
    error: 'Invalid URL'
  })
  .toss();
