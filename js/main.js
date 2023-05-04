// on doc ready
$(function () {
  /* 
    screen: 'welcome' | 'settings' | 'options' | 'game' | 'quit' | 'restart'
  */
  const globalState = {
    screen: "welcome",
    worldMap: null,
    bugTeam1: null,
    bugTeam2: null,
    iterations: null,
    tickSpeed: null,
    logSession: false,
  };

  function setScreen(screen) {
    const screens = ["welcome", "settings", "game", "options", "quit", "restart"];

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

  function setWorldMap(worldMap) {
    globalState.worldMap = worldMap;

    console.log("globalState: ", globalState);
  }

  function setBugTeam1(bugTeam1) {
    globalState.bugTeam1 = bugTeam1;

    console.log("globalState: ", globalState);
  }

  function setBugTeam2(bugTeam2) {
    globalState.bugTeam2 = bugTeam2;

    console.log("globalState: ", globalState);
  }

  function setIterations(iterations) {
    globalState.iterations = iterations;

    console.log("globalState: ", globalState);
  }

  function setTickSpeed(tickSpeed) {
    globalState.tickSpeed = tickSpeed;

    console.log("globalState: ", globalState);
  }

  const startBtn = $("#start-btn");
  startBtn.on("click", function (event) {
    event.preventDefault();
    setScreen("settings");
  });

  const gameStartBtn = $("#game-start-btn");
  startBtn.on("click", function (event) {
    event.preventDefault();

    if(!isSettingsFormValid()) {
      return
    }

    setScreen("game");
  });

  // close options card on click on X
  const optionsCloseBtn = $("#options-close-btn");
  optionsCloseBtn.on("click", function (event) {
    event.preventDefault();

    if(!isOptionsFormValid()) {
      return
    }

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

  const gameMapInput = $("#game-map-input");
  gameMapInput.on("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const map = event.target.result;
      console.log("worldMap: ", map);

      setWorldMap(map);
    };

    reader.readAsText(file);
  });

  const bugTeam1Input = $("#bug-team-1-input");
  bugTeam1Input.on("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const bugTeam1 = event.target.result;
      console.log("bugTeam1: ", bugTeam1);

      globalState.bugTeam1 = bugTeam1;
    };

    reader.readAsText(file);
  });

  const bugTeam2Input = $("#bug-team-2-input");
  bugTeam2Input.on("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const bugTeam2 = event.target.result;
      console.log("bugTeam2: ", bugTeam2);

      globalState.bugTeam2 = bugTeam2;
    };

    reader.readAsText(file);
  });

  const iterationsInput = $("#iterations-input");
  // debounce
  let timeout = null;
  iterationsInput.on("keyup", function (event) {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      const iterations = event.target.value;
      console.log("iterations: ", iterations);

      setIterations(iterations);
    }, 500);
  });

  const tickSpeedInput = $("#tick-speed-input");
  // debounce
  let timeout2 = null;
  tickSpeedInput.on("keyup", function (event) {
    clearTimeout(timeout2);

    timeout2 = setTimeout(function () {
      const tickSpeed = event.target.value;
      console.log("tickSpeed: ", tickSpeed);

      setTickSpeed(tickSpeed);
    }, 500);
  });

  function isSettingsFormValid () {
    if (globalState.worldMap === null) {
      alert("Please upload a map");
      return;
    }

    if (globalState.bugTeam1 === null) {
      alert("Please upload a bug team 1");
      return;
    }

    if (globalState.bugTeam2 === null) {
      alert("Please upload a bug team 2");
      return;
    }

    if (globalState.iterations === null) {
      alert("Please enter a number of iterations");
      return;
    }

    if (globalState.tickSpeed === null) {
      alert("Please enter a tick speed");
      return;
    }

    return true
  }

  function isOptionsFormValid() {
    return true
  }

  const saveBtn = $("#save-btn");
  saveBtn.on("click", function (event) {
    event.preventDefault();
  
    if(!isOptionsFormValid()) {
      return
    }

    setScreen("game");
  });


});
