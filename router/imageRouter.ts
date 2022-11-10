import GeneralRouter from "https://raw.githubusercontent.com/Schotsl/Uberdeno/main/router/GeneralRouter.ts";
import ImageController from "../controller/ImageController.ts";

const imageController = new ImageController(
  "image",
);

const imageRouter = new GeneralRouter(
  imageController,
  "image",
);

export default imageRouter.router;
