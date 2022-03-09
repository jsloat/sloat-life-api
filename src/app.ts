// Per https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined
import "core-js/stable";
import "regenerator-runtime/runtime";
import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
