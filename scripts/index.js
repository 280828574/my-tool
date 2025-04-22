const files = import.meta.glob('./*.js', { eager: true })
import { createAssign } from './base.js'
let modules = {}
for (const key in files) {
  let arr = ['./index.js']
  if (!arr.includes(key)) {
    let path = key.replace(/(\.\/|\.js)/g, '').split('/')
    createAssign(modules, path, files[key])
  }
}
export default modules
