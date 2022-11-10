import {
  Request,
  Response,
  State,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";

import spacesClient from "https://raw.githubusercontent.com/Schotsl/Uberdeno/v1.0.0/services/spacesClient.ts";
import ImageEntity from "../entity/ImageEntity.ts";
import ImageCollection from "../collection/ImageCollection.ts";

import GeneralRepository from "https://raw.githubusercontent.com/Schotsl/Uberdeno/v1.0.0/repository/GeneralRepository.ts";
import GeneralController from "https://raw.githubusercontent.com/Schotsl/Uberdeno/v1.0.0/controller/GeneralController.ts";
import InterfaceController from "https://raw.githubusercontent.com/Schotsl/Uberdeno/v1.0.0/controller/InterfaceController.ts";

export default class ImageController implements InterfaceController {
  private generalRepository: GeneralRepository;
  private generalController: GeneralController;

  constructor(
    name: string,
  ) {
    this.generalRepository = new GeneralRepository(
      name,
      ImageEntity,
      ImageCollection,
    );

    this.generalController = new GeneralController(
      name,
      ImageEntity,
      ImageCollection,
    );
  }

  async getCollection(
    { response, state }: {
      response: Response;
      state: State;
    },
  ) {
    await this.generalController.getCollection({ response, state });
  }

  async updateObject(
    { request, response, params }: {
      request: Request;
      response: Response;
      params: { uuid: string };
    },
  ) {
    await this.generalController.updateObject({ request, response, params });
  }

  async getObject(
    { response, params }: {
      response: Response;
      params: { uuid: string };
    },
  ) {
    await this.generalController.getObject({ response, params });
  }

  async removeObject(
    { response, params }: {
      response: Response;
      params: { uuid: string };
    },
  ) {
    const entity = await this.generalController.getObject({
      response,
      params,
    });

    // Remove the image from S3 storage
    const imagename = `${entity.uuid}.pptx`;
    const foldername = `${entity.uuid}`;

    await spacesClient.deleteFile(imagename);
    await spacesClient.deleteFile(foldername);

    // Remove the image from the database
    await this.generalController.removeObject({ response, params });
  }

  async addObject(
    { request, response }: { request: Request; response: Response },
  ) {
    const entity = await this.generalController.addObject({
      request,
      response,
    });

    const image = `${entity.uuid}.jpg`;
    const upload = spacesClient.signedPUT(image);

    response.body = { ...entity, upload };
  }
}
