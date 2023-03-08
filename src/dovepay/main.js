import { iframe as setIframe, dominit } from '@lyufudi/dove-utils'
import iframeContentHandler from './contentDocument'
import {setIframeHeight, display, hide, setSubNav, adaptContentIframe} from './functions'
import getVendor from './vendor'
import dovepay_css from '@lyufudi/dove-utils/assets/styles/dovepay.css'

export default function() {
  getVendor()
  document.write(`<link type="text/css" rel="stylesheet" href="${dovepay_css}">`)
  window.addEventListener('DOMContentLoaded', main)
}

function main() {
  try {
    dominit()
    setSubNav()
    adaptContentIframe()
    const iframe = document.querySelector('#content_opr')
    setIframeHeight(iframe)
    window.addEventListener('resize', () => setIframeHeight(iframe))
    setIframe(iframe, iframeContentHandler, {show: display, hide: hide})
  } catch(e) {
    console.error('页面框架main.js处理失败', e.stack)
  }
}