import BaseEntity from "../../Uberdeno/entity/BaseEntity.ts";

import { IntColumn, SmallColumn } from "../../Uberdeno/other/Columns.ts";

export default class ImageEntity extends BaseEntity {
  public size = new IntColumn("size");
  public width = new SmallColumn("width");
  public height = new SmallColumn("height");
}
