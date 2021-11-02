import { Sprite } from "../base/Sprite.js";
import { Pencil } from "./Pencil.js";

// 下半部分的铅笔
export class DownPencil extends Pencil {
  constructor(top) {
    const image = Sprite.getImage("pencilDown");
    super(image, top);
  }

  draw() {
    let gap = GameGlobal.height / 5;
    this.y = this.top + gap;
    super.draw();
  }
}
