require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()

app.use(express.json())

app.use(
    session({
        resave:false,
        saveUninitialized:false,
        rejectUnauthorized:false,
        cookie:{maxAge: 1000 * 60 * 60},
        secret:SESSION_SECRET
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db => {
    const port = SERVER_PORT
    app.set('db', db)
    app.listen(port || 7474, () => console.log(`Connected to ${port}`))
})