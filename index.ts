import Server from "../Uberdeno/other/Server.ts";

import imageRouter from "./router/imageRouter.ts";

const server = new Server();

server.add(imageRouter);

server.listen(8080);
