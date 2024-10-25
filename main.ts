import {Hono} from "hono";
import {serveStatic} from "hono/deno";

const app = new Hono()
    .use("/", serveStatic({path: "./index.html"}));

Deno.serve({hostname: "127.0.0.1", port: 8080}, app.fetch);
