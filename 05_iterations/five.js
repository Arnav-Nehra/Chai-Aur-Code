const coding=['js','ruby','java','python','cpp']

coding.forEach(function (val){
    //console.log(val)
})

coding.forEach((item) =>{
    //console.log(item)
})

function printme(val){
    //console.log(val)
}

coding.forEach(printme)

//the forEach() iterative function not only retrieves the array value
//but also the index number,//the whole array printing all values 

coding.forEach((key,index,arr)=>{
    //console.log(key,index,arr)
})

const mycoding=
[{
    languageName:'javascript',
    langauageextension:'js'
},
{
    languageName:'c++',
    langauageextension:'cpp'
},
{
    languageName:'ruby',
    langauageextension:'rb'
}]

mycoding.forEach((item)=>{
    console.log(item.languageName)
})