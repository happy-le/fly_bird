import { DataStore } from "./js/base/DataStore.js";
import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./js/Director.js";
import { Birds } from "./js/player/Birds.js";
import { Score } from "./js/player/Score.js";
import { StartButton } from "./js/player/StartButton.js";
import { BackGround } from "./js/runtime/BackGround.js";
import { Land } from "./js/runtime/Land.js";

export class Main {
  constructor() {
    this.canvas = document.getElementById("game_canvas");
    this.ctx = this.canvas.getContext("2d");
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();

    const loader = ResourceLoader.create();
    loader.onLoaded((map) => this.onResourceFirstLoaded(map));
  }

  onResourceFirstLoaded(map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.init();
  }

  init() {
    // 重置游戏
    this.director.isGameOver = false;

    this.dataStore
      .put("pencils", [])
      .put("background", BackGround)
      .put("land", Land)
      .put("birds", Birds)
      .put("startButton", StartButton)
      .put("score", Score);

    this.registerEvent(); // 注册全局事件
    this.director.createPencil(); // 要早游戏逻辑运行之前

    this.director.run();
  }

  registerEvent() {
    this.canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      if (this.director.isGameOver) {
        console.log("游戏重新开始");
        this.init();
      } else {
        this.director.birdsEvent();
      }
    });
  }
}
