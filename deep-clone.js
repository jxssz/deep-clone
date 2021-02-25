function deepClone(obj) {
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj === null) {
    return null
  }
  if (typeof obj !== 'object') {
    return obj
  }
  let newobj = new obj.constructor
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newobj[key] = deepClone(obj[key])
    }
  }
  return newobj
}