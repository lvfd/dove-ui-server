const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const env = process.env.NODE_ENV? 'production': process.env.NODE_ENV
const helmet = require('helmet')
const filesCatalog = require('./files-catalog')
const appname = 'dove-us'

// app.use(helmet())
app.get(`/${appname}`, (req, res) => res.send('<h1>dove-ui-server</h1>'))
app.use(`/${appname}/release`, express.static(path.resolve(process.cwd(), 'release')))
filesCatalog(app, `/${appname}/release`, 'release')

app.listen(port, () => {
  console.log(`dove-ui-server is running in '${env}' enviroment.`)
})

