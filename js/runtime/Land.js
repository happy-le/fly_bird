import { Sprite } from "../base/Sprite.js";
import { Director } from "../Director.js";

// 不断移动的陆地
export class Land extends Sprite {
  constructor() {
    const image = Sprite.getImage("land");
    super(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      window.innerHeight - image.height,
      image.width,
      image.height
    );
    this.LandX = 0;
    this.LandSpeed = Director.getInstance().moveSpeed;
  }

  draw() {
    this.LandX += this.LandSpeed;
    if (this.LandX > this.image.width - window.innerWidth) {
      this.LandX = 0;
    }
    super.draw(
      this.image,
      this.srcX,
      this.srcY,
      this.srcW,
      this.srcH,
      -this.LandX,
      this.y,
      this.width,
      this.height
    );
  }
}
