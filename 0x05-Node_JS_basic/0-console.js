/**
 * Displays a message on the STDOUT.
 * @param {String} msg The message to display.
 */
const displayMessage = function (d) {
  process.stdout.write(d + '\n');
};

module.exports = displayMessage;
