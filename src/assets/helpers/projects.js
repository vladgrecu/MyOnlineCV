//Learning
import backgroundGenerator from "../photos/projects/backgroundGenerator.png";
import rockPaperScissors from "../photos/projects/rockPaperScissors.png";
import shoppingList from "../photos/projects/shoppingList.png";
import agendaApp from "../photos/projects/agendaApp.png";
// Javascript
import theMover from "../photos/projects/theMover.png";
import myIMDB from "../photos/projects/myIMDB.png";
//React
import rspTracker from "../photos/projects/rspTracker.png";
import shoppingBasket from "../photos/projects/shoppingCart.png";
import smartBrain from "../photos/projects/faceRecognition.png";
import subMe from "../photos/projects/subMe.png";

export const projectOptions = {
  learning: [
    {
      title: "Background-Generator",
      img: backgroundGenerator,
      description:
        "My first ever tries of DOM Manipulation, new superpowers gained.",
      gitHub: "https://github.com/vladgrecu/Background-Generator",
      live: "https://vladgrecu.github.io/Background-Generator/"
    },
    {
      title: "Rock-Paper-Scissors",
      img: rockPaperScissors,
      description:
        "Homework assigment that I extended to practice DOM Manipulation.",
      gitHub: "https://github.com/vladgrecu/Rock-Paper-Scissors",
      live: "https://vladgrecu.github.io/Rock-Paper-Scissors/"
    },
    {
      title: "A Shopping List",
      img: shoppingList,
      description:
        "Workshop assigment, learning OOP, Classes and inheritence in JS.",
      gitHub: "https://github.com/vladgrecu/shoppinglist",
      live: "https://vladgrecu.github.io/shoppinglist/"
    },
    {
      title: "Agenda App",
      img: agendaApp,
      description:
        "Toy App - learning the basics of fetch, promisses, async await.",
      gitHub: "https://github.com/vladgrecu/AgendaApp",
      live: "https://vladgrecu.github.io/AgendaApp/"
    }
  ],
  vanilla: [
    {
      title: "The Mover",
      img: theMover,
      description:
        "A homework assignment that I really liked and made a game out of.",
      gitHub: "https://github.com/vladgrecu/The-Mover",
      live: "https://vladgrecu.github.io/The-Mover/"
    },
    {
      title: "myIMDB",
      img: myIMDB,
      description:
        " An IMDB-like site with authentication and various backend interactions.",
      gitHub: "https://github.com/vladgrecu/myIMDB-10.2",
      live: "https://crinel.github.io/myIMDB-10.2/pages/home.html"
    }
  ],
  react: [
    {
      title: "RSP Tracker",
      img: rspTracker,
      description:
        "This app, when done, should help me and my coworkers do our jobs much easier.",
      gitHub: "https://github.com/vladgrecu/RSPTracker",
      live: "https://vladgrecu.github.io/RSPTracker/"
    },
    {
      title: "Shopping Basket",
      img: shoppingBasket,
      description:
        "A simulated list of products that you can add to your shopping basket.",
      gitHub: "https://github.com/vladgrecu/shoppingBasket",
      live: "https://github.com/vladgrecu/shoppingBasket"
    },
    {
      title: "Smart Brain",
      img: smartBrain,
      description:
        "Authentication app that has the possibility to submit an image for face-detection.",
      gitHub: "https://github.com/vladgrecu/smartBrain",
      live: "https://github.com/vladgrecu/shoppingBasket"
    },
    {
      title: "Sub.Me",
      img: subMe,
      description:
        "Submit a video/audio file, recorded in any language, and get subtitles in the language you want.",
      gitHub: "https://github.com/vladgrecu/Subme",
      live: "https://github.com/vladgrecu/shoppingBasket"
    }
  ]
};
