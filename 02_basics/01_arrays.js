const myarr=[0,1,2,3,4,5]
const myheros=['shaktiman','motu','patlu']

const myarrr=new Array(1,2,3,4)
// console.log(myarrr)

console.log(myarr[0])

//array methods
// myarr.push(6)
// console.log(myarr)
// myarr.push(7)
// console.log(myarr)
// myarr.pop()
// myarr.pop()
// console.log(myarr)

// myarr.unshift(5)
// console.log(myarr)
// myarr.shift()
// console.log(myarr)

console.log(myarr.includes(6))
console.log(myarr.indexOf(4))


//slice and splice

console.log('A',myarr)
console.log(myarr.slice(1,4))
console.log('B',myarr)
console.log(myarr.splice(0,2))
console.log('C',myarr);
console.log(myarr)

//the major diff bw slice and splice is that slice takes a copy while splice change the orignal value...