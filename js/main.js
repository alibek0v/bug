// on doc ready
$(function () {
  /* 
    screen: 'welcome' | 'options' | 'game' | 'quit' | 'restart'
  */
  const globalState = {
    screen: "welcome",
  };

  function setScreen(screen) {
    const screens = ["welcome", "options", "game", "quit", "restart"];

    if (!screens.includes(screen)) {
      throw new Error("Invalid screen passed in");
    }

    globalState.screen = screen;

    // hide all screens except the one passed in
    screens.forEach(function (screen) {
      $(`#${screen}-screen`).hide();
    });

    // show the screen passed in
    $(`#${screen}-screen`).show();
  }

  const startBtn = $("#start-btn");
  startBtn.on("click", function (event) {
    event.preventDefault();
    setScreen("options");
  });

  // close options card on click on X
  const optionsCloseBtn = $("#options-close-btn");
  optionsCloseBtn.on("click", function (event) {
    event.preventDefault();
    setScreen("game");
  });

  // on options on click on button
  const optionsOpenBtn = $("#options-open-btn");
  optionsOpenBtn.on("click", function (event) {
    event.preventDefault();
    setScreen("options");
  });

  // on quit open quit screen
  const quitBtn = $("#quit-btn");
  quitBtn.on("click", function (event) {
    event.preventDefault();
    setScreen("quit");
  });

  // on quit yes
  const quitYesBtn = $("#quit-yes-btn");
  quitYesBtn.on("click", function (event) {
    event.preventDefault();

    setScreen("restart");
  });

  // on quit no
  const quitNoBtn = $("#quit-no-btn");
  quitNoBtn.on("click", function (event) {
    event.preventDefault();

    setScreen("game");
  });

  // on restart reset game
  const restartBtn = $("#restart-btn");
  restartBtn.on("click", function (event) {
    event.preventDefault();

    setScreen("welcome");
  });
});
