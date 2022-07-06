const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const port = 3000
const { NotFoundError } = require("./utils/errors")

const authRouter = require("./routes/auth")

require('dotenv').config();
var colors = require('colors');


app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
app.use("/login", authRouter)
app.use("/register", authRouter)

app.use((req, res, next) => {
    return next(new NotFoundError())
  })
  
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
  
    return res.status(status).json({
      error: { message, status },
    })
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})


