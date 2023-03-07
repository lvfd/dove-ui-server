const fs = require('fs')
const path = require('path')

module.exports = function(expressApp, route, staticFilesFolder) {
  expressApp.get(route, (req, res) => res.send(buildCatalog(process.cwd(), staticFilesFolder)))
  getAllfolders(process.cwd(), staticFilesFolder).forEach( folder => {
    expressApp.get(`${route}/${folder}`, (req, res) => res.send(buildCatalog(process.cwd(), `${staticFilesFolder}/${folder}`)))
  })
}

function getDir(...args) {
  let folders = []
  let files = []
  const dir = fs.readdirSync(path.resolve(...args))
  dir.forEach(el => {
    if (fs.lstatSync(path.resolve(...args, el)).isDirectory()) 
      folders.push(el)
    else
      files.push(el)
  })
  return {
    dir: dir,
    files: files,
    folders: folders
  }
}

function buildCatalog(...args) {
  let html = '<ul>'
  const dir = getDir(...args)
  dir.folders.forEach(el => html += `<li><a href="${el}">${el}/</a></li>`)
  dir.files.forEach(el => html += `<li><a href="${el}"><strong>${el}</stron></a></li>`)
  html += '</ul>'
  return html
}

function getAllfolders(...args) {
  let result = []
  addFolders(...args)
  return result
  function addFolders(...args) {
    getDir(...args).folders.forEach( folder => {
      result.push(getParentPaths(...args) + folder)
      if (getDir(...args, folder).folders.length > 0) {
        addFolders(...args, folder)
      }
    })
  }
}

function getParentPaths(...args) {
  let parentPaths = ''
  if (args.length < 2) throw new Error('error')
  for (let i = 2; i < args.length; i++) {
    parentPaths += `${args[i]}/`
  }
  return parentPaths
}