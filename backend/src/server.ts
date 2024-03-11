import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const port= process.env.PORT || 3333

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({message:error.message});
})

const start = async () => {

    app.register(cors);
    app.register(routes);
    try {
        await app.listen(port);
        
    } catch (error) {
        process.exit(1);
        
    }

}

start();