const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('minu pihta toimub päring')
    res.send('Hello World!')
})

app.get('/teineleht', (req, res) => {
    console.log('teise endpointi pihta toimub päring')
    res.send('teine endpoint!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
