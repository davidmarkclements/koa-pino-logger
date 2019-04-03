'use strict'

var Koa = require('koa')
var pino = require('pino')
var logger = require('../')

var app = new Koa()
app.use(logger(pino.extreme()))

app.use((ctx) => {
  ctx.body = 'hello world'
})

app.listen(3000)
