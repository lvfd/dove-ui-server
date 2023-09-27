const express = require('express')
const router = express.Router()

const svgCaptcha = require('svg-captcha')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/static', (req, res) => {
  try {
    const text = req.body.text
    const options = req.body.options
    const captcha = svgCaptcha(text, options)
    res.status(200).send(captcha)
  } catch(error) {
    res.status(500).send(error)
  }
})

module.exports = router