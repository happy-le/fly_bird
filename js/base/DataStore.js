/**
 * 需要长期保存的变量保存在类的变量中
 * 不需要长期保存（根据程序运行随时销毁创建）的变量保存在类的map中
 */
export class DataStore {
  static getInstance() {
    if (!DataStore.instance) {
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }

  constructor() {
    this.map = new Map();
  }

  // 链式操作小技巧，可以连续多次“.”操作
  put(key, value) {
    if (typeof value === "function") {
      value = new value();
    }
    this.map.set(key, value);
    return this;
  }

  get(key) {
    return this.map.get(key);
  }

  // 销毁创建过的元素
  destory() {
    for (let value of this.map.values()) {
      value = null;
    }
  }
}
