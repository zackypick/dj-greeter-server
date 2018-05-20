function Greeter() {
}

Greeter.prototype.greet = (name) => {
    return `Hello ${name}!`;
};

module.exports = new Greeter();