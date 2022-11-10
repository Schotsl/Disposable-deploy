import ImageController from "../controller/ImageController.ts";

import GeneralRouter from "../../Uberdeno/router/GeneralRouter.ts";
import GeneralController from "../../Uberdeno/controller/GeneralController.ts";

const imageController = new ImageController(
  "image",
);

const imageRouter = new GeneralRouter(
  imageController,
  "image",
);

export default imageRouter.router;
