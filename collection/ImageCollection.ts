import ImageEntity from "../entity/ImageEntity.ts";
import BaseCollection from "../../Uberdeno/collection/BaseCollection.ts";

export default class ImageCollection extends BaseCollection {
  public images: ImageEntity[] = [];
}
