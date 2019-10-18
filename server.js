const express = require('express')
const app = express()
require('./db/db.js')

app.use(express.urlencoded({extended:false}))

const catsController = require('./controller/cats.js')
app.use('/cats', catsController)

app.listen(3000, () => {
    console.log('listening');
});
