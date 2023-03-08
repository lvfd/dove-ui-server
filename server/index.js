const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const helmet = require('helmet')
const filesCatalog = require('./files-catalog')
const appname = 'dove-us'

app.use(helmet())
app.get(`/${appname}`, (req, res) => res.send(`
  <h1>dove-ui-server</h1>
  <h2>mode=${env}</h2>
  <ul>
    <li><a href="/${appname}/release">Release</a></li>
    <li><a href="/${appname}/test">Test</a></li>
  </ul>
`))

app.use(`/${appname}/release`, express.static(path.resolve(process.cwd(), 'release')))
filesCatalog(app, `/${appname}/release`, 'release')

if (env === 'development') {
  app.use(`/${appname}/test`, express.static(path.resolve(process.cwd(), 'test')))
  filesCatalog(app, `/${appname}/test`, 'test')
}

app.listen(port, () => {
  console.log(`dove-ui-server is running in '${env}' enviroment.`)
  console.log(`context: /${appname}`)
})