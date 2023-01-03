import Server from "https://raw.githubusercontent.com/Schotsl/Uberdeno/v1.0.1/other/Server.ts";

import imageRouter from "./router/imageRouter.ts";

const server = new Server();

server.add(imageRouter);


server.listen(8080);
