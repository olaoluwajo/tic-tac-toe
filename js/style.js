const players = [{name: "OLAOLUWA" , Symbol: "X"}];
players.push ({name: "JOHN" , symbol: "O"});

const square = document.getElementsByClassName('square');

square[4].innerHTML = players[0].Symbol;

square[1].innerHTML = players[1].Symbol;