// 循环的渲染
import { Sprite } from "../base/Sprite.js";

export class Birds extends Sprite {
  constructor() {
    const image = Sprite.getImage("birds");
    super(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      image.width,
      image.height
    );
    // 宽34 高24 上下边距10，左右边距9
    this.clippingX = [9, 9 + 34 + 18, 9 + 34 + 18 + 34 + 18];
    this.clippingY = [10, 10, 10];

    this.clippingWidth = [34, 34, 34];
    this.clippingHeight = [24, 24, 24];

    this.birdX = GameGlobal.width / 4;
    this.birdsX = [this.birdX, this.birdX, this.birdX];
    this.birdY = GameGlobal.height / 2;
    this.birdsY = [this.birdY, this.birdY, this.birdY];

    this.birdWidth = 34;
    this.birdsWidth = [this.birdWidth, this.birdWidth, this.birdWidth];
    this.birdHeight = 24;
    this.birdsHeight = [this.birdHeight, this.birdHeight, this.birdHeight];

    this.y = [this.birdY, this.birdY, this.birdY];
    this.index = 0;
    this.count = 0;
    this.time = 0;
  }

  draw() {
    const speed = 0.1;
    this.count = this.count + speed >= 3 ? 0 : this.count + speed;
    this.index = Math.floor(this.count);

    // 模拟重力加速度
    const g = 0.98 / 2.4;
    const offsetUp = 30;
    const offsetY = (g * this.time * (this.time - offsetUp)) / 2;
    for (let i = 0; i <= 2; i++) {
      this.birdsY[i] = this.y[i] + offsetY;
    }
    this.time++;

    super.draw(
      this.image,
      this.clippingX[this.index],
      this.clippingY[this.index],
      this.clippingWidth[this.index],
      this.clippingHeight[this.index],
      this.birdsX[this.index],
      this.birdsY[this.index],
      this.birdsWidth[this.index],
      this.birdsHeight[this.index]
    );
  }
}
