function myFunction(){
  var ram = Math.random();
  var ram1 = Math.random();
  ram = Math.floor(ram * 6)+1;
  ram1 = Math.floor(ram1 * 6)+1;
  document.querySelector(".img1").setAttribute("src","images/dice"+ram+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+ram1+".png");
  if(ram==ram1){
    document.querySelector(".container h1").innerHTML = "DRAW";
  }else if(ram>ram1){
    document.querySelector(".container h1").innerHTML = "Player 1 wins";
  }else{
    document.querySelector(".container h1").innerHTML = "Player 2 wins";
  }
};
