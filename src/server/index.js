const fastify = require('fastify')({
  logger: true,
});
// eslint-disable-next-line import/no-extraneous-dependencies
const fastifyStatic = require('@fastify/static');
const path = require('node:path');

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../client/dist'),
});

fastify.get('/', (req, reply) => {
  reply.sendFile('index.html');
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
