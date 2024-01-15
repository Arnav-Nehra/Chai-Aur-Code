const myObj={
    'js':'javascript',
    'java':'java',
    'cpp':'c++',
    'rb':'ruby'
}

for(const key in myObj){
    //console.log(`${key} shortcut is for ${myObj[key]}`)
}

const programming=['js','java','cpp','ruby','php','arduino']
for(const key in programming){
    //console.log(programming[key])
}

const map=new Map()

map.set('India','Rupee')
map.set('Russia','Rubel')
map.set('United Kingdom','Euro')
map.set('Canada','Dollar')

for(const key in map){
    console.log(`the value is ${key}`)
}
