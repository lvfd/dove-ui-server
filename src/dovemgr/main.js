import { iframe as setIframe, dominit } from '@lyufudi/dove-utils'
import { show } from '@lyufudi/dove-utils/functions'
import getVendor from './vendor'
import setMenu from './menu'
import iframeContentHandler from './contentDocument'
import uk2dom from './uk2dom'
import mgr_css from '@lyufudi/dove-utils/assets/styles/dovemgr.css'

getVendor()
document.write(`<link type="text/css" rel="stylesheet" href="${mgr_css}">`)

window.addEventListener('DOMContentLoaded', mainHandler)
window.addEventListener('resize', setIframeHeight)

function mainHandler() {
  try {
    dominit()
    uk2dom()
    const iframe = document.querySelector('#frame_content')
    setIframe(iframe, iframeContentHandler)
    setIframeHeight(iframe)
    setMenu()
  } catch(e) {
    console.error(e, e.stack)
  } finally {
    const footer = document.querySelector('footer')
    if (footer) show(footer)
  }
}

function setIframeHeight(iframe) {
  try {
    const iframeHeight = getIframeHeight()
    iframe.height = iframeHeight
  } catch(e) {
    console.error(e, e.stack)
  }
  function getIframeHeight() {
    const hh = window.getComputedStyle(document.querySelector('header')).getPropertyValue('height')
    const fh = window.getComputedStyle(document.querySelector('footer')).getPropertyValue('height')
    const deciHeight = parseInt(hh) + parseInt(fh)
    return window.innerHeight - deciHeight
  }
}