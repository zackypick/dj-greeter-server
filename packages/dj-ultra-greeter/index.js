const greeter = require('dj2018-greeter');
const figlet = require('figlet');

const megaGreeter = (name, err, data) => {
    figlet(greeter.greet(name), (error, success) => {
        if (err) {
            error(err);
        } else {
            success(data);
        }
    });
};

module.exports = megaGreeter;