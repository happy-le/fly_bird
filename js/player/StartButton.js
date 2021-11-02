import { Sprite } from "../base/Sprite.js";

export class StartButton extends Sprite {
  constructor() {
    const image = Sprite.getImage("startButton");
    super(
      image,
      0,
      0,
      image.width,
      image.height,
      (GameGlobal.width - image.width) / 2,
      (GameGlobal.height - image.height) / 2.5,
      image.width,
      image.height
    );
  }
}
