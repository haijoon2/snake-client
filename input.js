let connection;
let interval;

const sendMovementToServer = (movement) => {
  clearInterval(interval);
  interval = setInterval(() => {
    connection.write(`Move: ${movement}`);
  }, 50);
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Disconnecting...");
    process.exit();
  }
  if (key === 'w' || key === 'W') {
    sendMovementToServer("Move: up");
  } else if (key === 'a' || key === 'A') {
    sendMovementToServer("Move: left");
  } else if (key === 's' || key === 'S') {
    sendMovementToServer("Move: down");
  } else if (key === 'd' || key === 'D') {
    sendMovementToServer("Move: right");
  } else if (key === '1') {
    connection.write("Say: Hello");
  } else if (key === '2') {
    connection.write("Say: How are you doing?");
  } else if (key === '3') {
    connection.write("Say: Oh no, you got me!");
  } else if (key === '4') {
    connection.write("Say: Catch me if you can! Hah!");
  } else if (key === '5') {
    connection.write("Say: I'm hannnngry");
  }
};

const setupInput = function() {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};