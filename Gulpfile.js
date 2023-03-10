const { src, dest, watch } = require('gulp')
const { node_env } = require('./project.config')

const sourceRoot = node_env === 'production'? 'release': 'test'
const javaRoot = 'C:/Users/lvfd/git-idea/'

const sourceFolder = {
  // test:        `${sourceRoot}/dovepay`,
  dovepay:        `${sourceRoot}/dovepay`,
  dovepayPayment: `${sourceRoot}/dovepay-payment`,
  dovemgr:        `${sourceRoot}/dovemgr`,
}
const javaFolder = {
  // test:        'D:/@@@test',
  dovepay:        `${javaRoot}/dovePay/src/main/webapp/js/webpack`,
  dovepayPayment: `${javaRoot}/dovePay/src/main/webapp/js/webpack/payment`,
  dovemgr:        `${javaRoot}/doveMgr/src/main/webapp/js/webpack`,
}

function filelistener(name) {
  const config = {
    ignoreInitial: false,
    delay: 1000
  }
  const sourceGlob = `${sourceFolder[name]}/**/*.js*`
  watch(sourceGlob, config, function(cb) {
    src(sourceGlob).pipe(dest(javaFolder[name]))
    cb()
  })
}

// exports.test = () => filelistener('test')
exports.dovepay = () => filelistener('dovepay')
exports.dovepayPayment = () => filelistener('dovepayPayment')
exports.dovemgr = () => filelistener('dovemgr')