let weapon = Array.from(document.getElementsByClassName("weapons"));
let user;
let chosen_weapon;
let computer;

// --------------------------------------------------------------------
// console.log(weapon[1])
for (const k in weapon) {
  weapon[k].addEventListener("click", () => {
    if (k == 0) {
      user = "s";
      chosen_weapon = "Scissor";
    } else if (k == 1) {
      user = "p";
      chosen_weapon = "Paper";
    } else if (k == 2) {
      user = "r";
      chosen_weapon = "Rock";
    }
    document.getElementById(
      "chose-weapon"
    ).innerHTML = `You chose: ${chosen_weapon}`;

    let computer_weapon = Math.ceil(Math.random() * 100);
    if (computer_weapon >= 0 && computer_weapon <= 33) {
      document.getElementById("comp-txt").innerHTML = "Computer chose: Rock";
      computer = "r";
    } else if (computer_weapon > 33 && computer_weapon <= 66) {
      document.getElementById("comp-txt").innerHTML = "Computer chose: Paper";
      computer = "p";
    }
    if (computer_weapon > 66 && computer_weapon <= 100) {
      document.getElementById("comp-txt").innerHTML = "Computer chose: Scissor";
      computer = "s";
    }
    // console.log(user,computer, computer_weapon);
    // console.log(k, user);
    // --------------------------output--------------------------
    if (user == computer) {
      document.getElementById("result").innerHTML = "It's a Draw.Choose again";
    } else if (user == "r" && computer == "p") {
      document.getElementById("result").innerHTML = "Computer Won";
    } else if (user == "p" && computer == "r") {
      document.getElementById("result").innerHTML = "You Won";
    } else if (user == "s" && computer == "r") {
      document.getElementById("result").innerHTML = "Computer Won";
    } else if (user == "r" && computer == "s") {
      document.getElementById("result").innerHTML = "You Won";
    } else if (user == "p" && computer == "s") {
      document.getElementById("result").innerHTML = "Computer Won";
    } else if (user == "s" && computer == "p") {
      document.getElementById("result").innerHTML = "You Won";
    }
  });
}
