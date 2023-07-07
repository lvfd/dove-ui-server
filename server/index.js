const path = require('path')
const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const helmet = require('helmet')
const filesCatalog = require('./files-catalog')
const appname = 'dove-us'
const { dirname, CORP } = require('../project.config')
const captchaRouter = require('./routes/captcha')

if (env === 'production') {
  app.use(helmet({ crossOriginResourcePolicy: CORP }))
}
app.get(`/${appname}`, (req, res) => res.send(`
  <h1>dove-ui-server</h1>
  <h2>mode=${env}</h2>
  <ul>
    <li><a href="/${appname}/release">Release</a></li>
    <li><a href="/${appname}/test">Test</a></li>
  </ul>
`))

app.use(`/${appname}/release`, express.static(path.resolve(dirname, 'release')))
filesCatalog(app, `/${appname}/release`, 'release')
app.use(`/${appname}/captcha`, captchaRouter)

if (env === 'development') {
  app.use(`/${appname}/test`, express.static(path.resolve(dirname, 'test')))
  filesCatalog(app, `/${appname}/test`, 'test')

  app.set('view engine', 'html')
  app.engine('html', ejs.__express)
  app.set('views', path.resolve(dirname, 'templates'))
  app.use('/dt/dist', express.static(path.resolve(dirname, 'release/dovepay-payment')))
  app.get('/dt/1', (req, res) => res.render('accaActPay'))
  app.get('/dt/2', (req, res) => res.render('accaBankPay'))
}


app.listen(port, () => {
  console.log(`dove-ui-server is running in '${env}' enviroment.`)
  console.log(`context: /${appname}`)
})