// tests for postTodos
// Generated by serverless-jest-plugin

const mod = require('./../todos/handler');
const jestPlugin = require('serverless-jest-plugin');

const lambdaWrapper = jestPlugin && jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'post' });
// the wrap function needs the path to the handler, and the
// name of the function as written in the serverless.yml

describe('postTodos', () => {
  beforeAll((done) => {
    // lambdaWrapper.init(liveFunction); // Run the deployed lambda

    done();
  });

  it('should return 200', () => {
    const body = JSON.stringify({
      title: 'feed the cat',
      completed: false
    });
    return wrapped.run({ body: body }).then((response) => {
      console.info(response);
      expect(response).toBeDefined();
    });
  });
});
