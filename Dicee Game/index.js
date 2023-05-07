const btn = document.getElementById("start");
const tittle = document.querySelector("h1");
const dice1 = document.getElementsByClassName("img1")[0]
const dice2 = document.getElementsByClassName("img2")[0]


btn.addEventListener("click", async function() {
    try {
      dice1.classList.add("dice-spinning");
      dice2.classList.add("dice-spinning");
      tittle.textContent = "Wait for it....";
  
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      dice1.classList.remove("dice-spinning");
      dice2.classList.remove("dice-spinning");
  
      let random1 = Math.floor(Math.random() * 6) + 1;
      let random2 = Math.floor(Math.random() * 6) + 1;
  
      dice1.setAttribute("src", `images/dice${random1}.png`);
      dice2.setAttribute("src", `images/dice${random2}.png`);
  
      if (random1 > random2) {
        tittle.textContent = "🚩 Play 1 Wins!";
      } else if (random2 > random1) {
        tittle.textContent = "Player 2 Wins! 🚩";
      } else {
        tittle.textContent = "Draw!";
      }
    } catch (error) {
      console.error(error);
    }
  });