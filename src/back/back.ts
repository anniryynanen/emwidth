import {Hono} from "hono";
import {serveStatic} from "hono/deno";

const app = new Hono()
    .use("*", serveStatic({root: "./"}));

Deno.serve({hostname: "127.0.0.1", port: 8080}, app.fetch);
