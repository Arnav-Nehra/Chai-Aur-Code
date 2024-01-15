//for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num)
}

const greetings="hello World!"

for(const greet of greetings){
    //console.log(greet)
}

//maps

//declaration 

const map=new Map()
map.set('IN','India')
map.set('IN','Hindustan')
map.set('CA','Canada')
map.set('EU','Europe')
map.set('USA','United States of America')

//console.log(map)
for(const [key,value]of map){
    //console.log(key,':-',value)
}

const myObject={
    'game1':'NFS',
    'game2':'golden GTA Vice City',
    'game3':"IGI",
    'game4':'TOD'
}
for(const [key,value] of myObject){
    console.log(key,':-',value)
}

//gives error says "myObject is not iterable"