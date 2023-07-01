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