import ComponentFactory from "./ComponentFactory.js";
import SplashCursor from "./components/SplashCursor.js";
import Icons from "./utils/Icons.js";

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add("has-js");

    new ComponentFactory();
    new SplashCursor();

    Icons.load();

    const cards = document.querySelectorAll(".card");
    
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const video = card.querySelector(".video-cover");
      
      card.addEventListener("mouseenter", () => {
          video.play();
      });
  
      card.addEventListener("mouseleave", () => {
          video.pause();
         
      });  
      
      video.addEventListener("ended", () => {
        if (card.matches(":hover")) {
            video.currentTime = 0;
            video.play();
        }
      });
    }
  }
}
new Main();
