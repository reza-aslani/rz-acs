const express = require('express')
const app = express()
const port = 7777

app.get('/', (req, res) => {
    console.log(`new request : `, req)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port : ${port}`)
})