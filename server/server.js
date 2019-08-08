require("dotenv").config()
const express = require('express')
const massive= require('massive')
const session = require('express-session')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env
const PORT = SERVER_PORT || 6666

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    app.listen(PORT,()=> console.log(`You're on elevator ${PORT} (0 w 0) Welcome to hell`))
})

