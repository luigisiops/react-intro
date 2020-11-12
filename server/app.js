const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.json())

let gifDatabase = []

app.post('/favorite-gifs', (req,res) => {
    const image = req.body.gif
    let gif = {image: image}
    gifDatabase.push(gif)
    res.json({success: true})
})

app.get('/favorite-gifs',(req,res) => {
    res.json(gifDatabase)

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})