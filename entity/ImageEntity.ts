import BaseEntity from "https://raw.githubusercontent.com/Schotsl/Uberdeno/v1.2.1/entity/BaseEntity.ts";

import {
  IntColumn,
  SmallColumn,
} from "https://raw.githubusercontent.com/Schotsl/Uberdeno/v1.2.1/other/Columns.ts";

export default class ImageEntity extends BaseEntity {
  public size = new IntColumn("size");
  public width = new SmallColumn("width");
  public height = new SmallColumn("height");
}
