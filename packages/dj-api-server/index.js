const ultraGreeter = require('dj-ultra-greeter');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(morgan('combined'));

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    const greet = ultraGreeter(name).replace(/\n/g, "<br/>");
    res.send(greet);
});

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
});

const port = 8090;
app.listen(port, () => console.log(`DevJamming on port ${port}`));