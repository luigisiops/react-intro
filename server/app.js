const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.use(express.json())

let gifDatabase = []

app.post('/favorite-gifs', (req,res) => {
    const gif = req.body.gif
    gifDatabase.push(gif)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})