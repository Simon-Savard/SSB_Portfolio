import ComponentFactory from "./ComponentFactory.js";
import Experience from "./Experience.js";
import Icons from "./utils/Icons.js";

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add("has-js");

    new ComponentFactory();
    new Experience();

    Icons.load();
  }
}
new Main();
