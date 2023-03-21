const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/cicd', (req,res) => res.send('cicd'))
app.get('/baru', (req,res) => res.send('api baru'))
app.get('/devops', (req,res) => res.send('devops start journey at 19/03/2023'))
app.get('/', (req,res) => res.send('This App is running Great!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})
module.exports = app