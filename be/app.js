const express = require("express")
const bodyParser = require('body-parser')
const config = require("./config")
const cors = require('cors');
const resumeRouter = require("./routes/resume")


const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.json({ extended: true }))

app.use('/api/md/', resumeRouter)



app.listen(config.port, () => {
    console.log('Successfully! express app listening on ' + config.host + ':' + config.port)
})