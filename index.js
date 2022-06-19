function rollDice(){
  document.querySelector("footer").style.padding = "1%";
  document.querySelectorAll(".dice")[0].style.visibility = "visible";
  document.querySelectorAll(".dice")[1].style.visibility = "visible";

  var p1rollNumber = Math.floor(Math.random()*5)+1;
  var p2rollNumber = Math.floor(Math.random()*5)+1;

  document.querySelector(".img1").setAttribute("src","images/dice"+p1rollNumber+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+p2rollNumber+".png");

  if(p1rollNumber == p2rollNumber){
    document.querySelector("h1").textContent = "It is a draw."
  }
  else if(p1rollNumber < p2rollNumber){
    document.querySelector("h1").textContent = "Player 2 wins."
  }
  else{
    document.querySelector("h1").textContent = "Player 1 wins."
  }
}
