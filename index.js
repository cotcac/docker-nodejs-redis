const express = require('express')

require('dotenv').config()
console.log("ENV PORT:::",process.env.PORT) // remove this after you've confirmed it is working

const app = express()
console.log("nodejs version::::", process.version);

//defining the root endpoint
app.get('/', (req, res) => {
    res.send('Hello world ')
})

//specifying the listening port
app.listen(process.env.PORT, ()=>{
    console.log('Listening on port ', process.env.PORT)
})