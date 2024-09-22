const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../../src/jobs.json'); // path to your mock db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    server.listen(5000, () => {
      resolve({
        statusCode: 200,
        body: JSON.stringify({ message: "JSON Server running" }),
      });
    });
  });
};
