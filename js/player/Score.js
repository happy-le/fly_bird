import { DataStore } from "../base/DataStore.js";

export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx;
    this.scoreNumber = 0;
    // 由于canvas刷新很快
    this.isScore = true;
  }

  draw() {
    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "#ffcbeb";
    this.ctx.fillText(
      this.scoreNumber,
      GameGlobal.width / 2,
      GameGlobal.height / 18,
      1000
    );
  }
}
