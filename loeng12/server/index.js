const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/add', (req, res) => {
    console.log('minu pihta toimub päring', JSON.stringify(req.body));
    const numbers = req.body;
    const answer = numbers.reduce((sum, number) => parseInt(number) + sum, 0);
    res.send(JSON.stringify({ answer }));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
