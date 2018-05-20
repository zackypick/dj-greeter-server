const greeter = require('dj-greeter');
const figlet = require('figlet');

const megaGreeter = (name) => {
    return figlet.textSync(greeter.greet(name));
};

module.exports = megaGreeter;