const files = import.meta.glob('./*.js', { eager: true })
let modules = {}
for (const path in files) {
  let arr = ['./index.js']
  if (!arr.includes(path)) {
    const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
    modules[moduleName] = files[path]
  }
}
export default modules
