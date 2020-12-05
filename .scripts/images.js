const path = require('path')
const glob = require('glob')
const fs = require('fs')

const gen = (id) => {
  glob(path.resolve(__dirname, `../src/assets/icons/${id}/*.png`), (err, files) => {
    let scss = ''
    for (const file of files) {
      const info = path.parse(file)
      const name = info.name
        .replace(/_/, '-')
        .replace(/\s/, '-')
        .replace(/\./, '')

      if (info.name !== name) {
        fs.renameSync(file, path.resolve(info.dir, `${name}${info.ext}`))
      }
      scss += `.${id}-${name} { background-image: url(../icons/${id}/${name}${info.ext}); }\n`
    }
    fs.writeFileSync(path.resolve(__dirname, `../src/assets/styles/_${id}.scss`), scss)
  })
}

gen('equipment')
gen('survivor')
gen('skill')
gen('item')
