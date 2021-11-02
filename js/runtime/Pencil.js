// 铅笔的基类

import { Sprite } from "../base/Sprite.js";

export class Pencil extends Sprite {
  constructor(image, top) {
    super(
      image,
      0,
      0,
      image.width,
      image.height,
      GameGlobal.width, // 刚好在右侧看不到的位置
      0,
      image.width,
      image.height
    );
    this.top = top
    this.moveSpeed = 2
  }

  draw() {
    this.x -= this.moveSpeed;
    super.draw(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.x,
      this.y,
      this.image.width,
      this.image.height
    );
  }
}
