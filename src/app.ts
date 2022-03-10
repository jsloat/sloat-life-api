// Per https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined
import "core-js/stable";
import "regenerator-runtime/runtime";
import Fastify from "fastify";
import Helmet from "fastify-helmet";

const app = Fastify({ logger: true });

app.register(Helmet);

app.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

const start = async () => {
  try {
    await app.listen(process.env.PORT, "0.0.0.0");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
