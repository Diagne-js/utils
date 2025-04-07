let ids = []

export const newId = () => {
  const letters = ['x','y', 'z']
  let id = ''
  for (var i = 0; i < letters.length; i++) {
     let lIndex = Math.floor(Math.random() * letters.length)
     let isMaj = Math.round(Math.random())
     let l = letters[lIndex]
     if (isMaj) {
       id += l.toUpperCase()
     }else{
       id += l
     }
     id += lIndex + isMaj * i
  }
  id = id+ids.length
  ids.push(id)
   return id
};
