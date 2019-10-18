const express = require('express');
const router = express.Router()

const Cats = require('../models/cats.js')

router.get('/new', (req, res) => {
    res.render('new.ejs')
})

router.post('/', (req, res) => {
    console.log(req.body, "<--- content goes here")
    if(req.body.readyToAdopt === 'on') {
     req.body.readyToAdopt = true
    } else {
        req.body.readyToAdopt = false
    }
    Cats.create(req.body, (err, newCat) => {
        if(err){
            res.send(err)
        } else {
            console.log(newCat)
            res.redirect('/cats')
        }
    })
})

router.get('/', (req, res) => {
    Cats.find({}, (err, createCats) => {
        if(err){
            res.send(err)
        } else {
            res.render('index.ejs', {
                cats: createCats
            })
        }
    })
})

module.exports = router