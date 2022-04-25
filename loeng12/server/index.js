const express = require('express');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/add', cors(), (req, res) => {
    console.log('minu pihta toimub päring', req.body);
    // res.set({
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true
    // });
    // res.json({ answer: 0 });
    res.end();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

