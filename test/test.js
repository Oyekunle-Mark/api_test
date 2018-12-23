let api = require('../index');

let supertest = require('supertest');

describe('plain text response', function() {

	it('api should return a plain text data', function(done) {
		supertest(api)
			.get('/')
			.expect('Content-Type', /text\/plain/)
			.end(done);
	});
});
