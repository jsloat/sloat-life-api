// Per https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined
import "core-js/stable";
import "regenerator-runtime/runtime";
import Fastify from "fastify";
import Helmet from "fastify-helmet";
import { Datastore } from "@google-cloud/datastore";

const app = Fastify({ logger: true });

const datastore = new Datastore();

const quickstart = async () => {
  // The kind for the new entity
  const kind = "Task";
  // The name/ID for the new entity
  const name = "sampletask1";
  // The Cloud Datastore key for the new entity
  const taskKey = datastore.key([kind, name]);
  // Prepares the new entity
  const task = {
    key: taskKey,
    data: {
      description: "Buy milk",
    },
  };
  // Saves the entity
  await datastore.save(task);
  console.log(`Saved ${task.key.name}: ${task.data.description}`);
};

app.register(Helmet);

app.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

app.get("/datastore-test", async (_, reply) => {
  await quickstart();
  reply.send({ status: "SUCCESS!!" });
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
