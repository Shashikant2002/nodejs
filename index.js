const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send({
        message: "done"
    })
})
app.use('/message', (req, res) => {
    res.send({
        m: "Shashikant"
    })
})

app.listen(4000, () => {
    console.log('done')
})