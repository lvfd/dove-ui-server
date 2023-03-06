import uikit_js from '@lyufudi/uikit/dist/js/uikit.min.js'
import uikit_icon from '@lyufudi/uikit/dist/js/uikit-icons.min.js'
import uikit_css from '@lyufudi/uikit/dist/css/uikit.dove-theme.min.css'
import { setMainMinHeight, bindBankType_Ways, bindBankLogo } from './accaActPay.js'

document.write(`
  <link rel="stylesheet" href="${uikit_css}">
  <script src="${uikit_js}"></script>
  <script src="${uikit_icon}"></script>
  `)

window.addEventListener('DOMContentLoaded', main)

function main() {
  try {
    setMainMinHeight()
    bindBankType_Ways()
    bindBankLogo('ol#payInput_13 input[name="fastId"]')
    bindBankLogo('input[name="bankId"]')
  } catch(e) {
    console.error(e, e.stack)
  }
}