import ImageEntity from "../entity/ImageEntity.ts";
import BaseCollection from "https://raw.githubusercontent.com/Schotsl/Uberdeno/v1.2.1/collection/BaseCollection.ts";

export default class ImageCollection extends BaseCollection {
  public images: ImageEntity[] = [];
}
