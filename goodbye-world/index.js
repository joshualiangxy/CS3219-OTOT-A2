const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Goodbye World!'));

app.listen(8080);
