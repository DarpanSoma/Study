// Alert the websit
// alert("Hello World")

// Local storage

// calling the local storage to get the item called "username"
// let username = localStorage.getItem("username")

// alert the user with username
// alert(username)

// ask the user for the username
// username = prompt("Enter Name: ")

// Seting the username as item
// localStorage.setItem("username", username)




// save the game
function saveGame() {
    localStorage.setItem("save_game", JSON.stringify(savefile));
}
// remove health and energy
function gameloop() {
    console.log("game loop is running");
    console.log("save data is: ", savefile);
    
    if (savefile.energy > 0) {
    savefile.energy -= 1;
  } else if (savefile.energy == 0 && savefile.health > 0) {
    savefile.health -= 1;
  }

  if (savefile.health == 0) {
    clearInterval(gameloopinterval);
    console.log("Your are out of engery and health");
  }

  document.getElementById(
    "health"
  ).innerHTML = `<h1>Health: ${savefile.health}</h1>`;
  document.getElementById(
    "energy"
  ).innerHTML = `<h1>Enegry: ${savefile.energy}</h1>`;

  saveGame();
}

// Game start here
let savefile = JSON.parse(localStorage.getItem("save_game"));
if (!savefile) {
  savefile = {
    clicks: 0,
    health: 100,
    energy: 50,
  };
}

// run the gameloop every second
let gameloopinterval = setInterval(gameloop, 1000);


//reset the game
document.getElementById("reset").addEventListener("click", function () {
  console.log("reset");
  localStorage.removeItem("save_game");
  savefile = {
    clicks: 0,
    health: 100,
    energy: 50,
  };
  refreshpage();
});

//refresh the game
function refreshpage() {
    window.location.reload();
}



