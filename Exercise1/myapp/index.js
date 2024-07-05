const express = require('express')
const app = express()
const app2 = express()
const app3 = express()
const port = 3000
const port2 = 3005
const port3 = 3010
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`)
})

app2.get('/', (req, res) => {
    res.send('Good Morning')
})
app2.listen(port2, () => {
    console.log(`Example app listening
at http://localhost:${port2}`)
})

app3.get('/', (req, res) => {
    res.send('Good Afternoon')
})
app3.listen(port3, () => {
    console.log(`Example app listening
at http://localhost:${port3}`)
})