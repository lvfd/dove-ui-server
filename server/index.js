const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const env = process.env.NODE_ENV? 'production': process.env.NODE_ENV
const helmet = require('helmet')
const filesCatalog = require('./files-catalog')

app.use(helmet())
app.get('/', (req, res) => res.send('<h1>dove-ui-server</h1>'))
app.use('/release', express.static(path.resolve(process.cwd(), 'release')))
filesCatalog(app, 'release')

app.listen(port, () => {
  console.log(`dove-ui-server is running in '${env}' enviroment.`)
})

