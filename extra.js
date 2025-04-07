export const getDynValues = (str, store) => {
  const dependences = []
  let output
  const vNames = Object.keys(store)
  const dynamicsParts = str.match(/\{([^{}]*)\}/g)
  if(!dynamicsParts) return [str, str, null]
  const templateVersion = toTemplateLiteral(str)
  for (let dP of dynamicsParts) {
    const name = dP.slice(1, -1).trim()
    if(!vNames.includes(name)) throw console.error(name + ' is not defined')
    output = str.replace(dHtml, store[name].value)
    dependences.push(name)
  }
  return [dynamicsParts, templateVersion, dependences]
}



export const escapeHtml = (target) => {
  if(typeof target != 'string') return target
  if(target.includes('&')) target = target.split('&').join('&amp;')
  if(target.includes('>')) target = target.split('>').join('&gt;')
  if(target.includes('<')) target = target.split('<').join('&lt;')
  if(target.includes('"')) target = target.split('"').join('&quot;')
  if(target.includes("'")) target = target.split("'").join('&#39;')
  return target
}


export const toTemplateLiteral = (string) => {
  let dynValues = string.match(/\{([^{}]*)\}/g)
  if(dynValues == null) return string
  if(typeof string != 'string') return string
  for (let d of dynValues) {
    const toTempl = '${$escapeHtml('+d.slice(1,-1)+')}'
    string = string.replace(d, toTempl)
  }
  string = "`" + string + "`"
  return string
}


export function replaceAll(str, from, to) {
  if (!str == (null || undefined) || from == undefined || to == undefined) {
    return str
  }
  str = str.replace(from, to)
  if (str.includes(from)) str = replaceAll(str, from, to)
  return str
}
