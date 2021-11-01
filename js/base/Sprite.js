import { DataStore } from "./DataStore.js";

// 精灵基类
export class Sprite {
  constructor(
    image = null,
    srcX = 0,
    srcY = 0,
    srcW = 0,
    srcH = 0,
    x = 0,
    y = 0,
    width = 0,
    height = 0
  ) {
    this.dataStore = DataStore.getInstance();

    this.ctx = this.dataStore.ctx;
    this.image = image;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  static getImage(key) {
    return DataStore.getInstance().res.get(key)
  }

  // 绘制精灵
  draw(
    image = this.image,
    srcX = this.srcX,
    srcY = this.srcY,
    srcW = this.srcW,
    srcH = this.srcH,
    x = this.x,
    y = this.y,
    width = this.width,
    height = this.height
  ) {
    this.ctx.drawImage(image, srcX, srcY, srcW, srcH, x, y, width, height);
  }
}
