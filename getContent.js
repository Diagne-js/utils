export const getContent = (target, startChar, endChar, start = null) => {
  if(start == null) start = target.indexOf(startChar)
   target = target.slice(start)
   target = target.slice(target.indexOf(startChar))
   const check = (i, ref) => {
     
     return target.slice(i, i+ref.length) == ref
   }
   let openTime = 1
   let closeTime = 0
   let cursor = target.indexOf(startChar) + 1
   while (openTime != closeTime){
     let char = target[cursor]
     
     if(check(cursor, startChar)) openTime++
     if(check(cursor, endChar)) closeTime++
     if (cursor == 40000) {
       console.error('Diagne: Content too much')
       break
     }
     cursor++
   }
   let content = target.slice(0, cursor)
   return content
}
