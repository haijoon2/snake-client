const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Disconnecting...");
    process.exit();
  }
  if (key === 'w' || key === 'W') {
    console.log("Move: up");
  } else if (key === 'a' || key === 'A') {
    console.log("Move: left");
  } else if (key === 's' || key === 'S') {
    console.log("Move: down");
  } else if (key === 'd' || key === 'D') {
    console.log("Move: right");
  } else if (key === '1') {
    console.log("Say: Hello");
  } else if (key === '2') {
    console.log("Say: How are you doing?");
  } else if (key === '3') {
    console.log("Say: Oh no, you got me!");
  } else if (key === '4') {
    console.log("Say: Catch me if you can! Hah!");
  } else if (key === '5') {
    console.log("Say: I'm hannnngry");
  }
};

const setupInput = function() {
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