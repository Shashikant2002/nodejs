const express = require('express');
const app = express();

app.use('/message', (req, res) => {
    res.send({
        m: "Shashikant"
    })
})

app.use('/m', (req, res) => {
    res.send({
        m: "m"
    })
})

app.use('/', (req, res) => {
    res.send({
        message: "done"
    })
})


app.listen(4000, () => {
    console.log('done')
})