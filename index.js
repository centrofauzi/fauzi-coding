const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
