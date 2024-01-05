//primitve
//seven types
//number,null,undefined,bigint,string,symbol,boolean


const num1=10.48
const num2=null
let num3;
const num4=1214228786897778957676784n // adding n makes it bigint
const num5="arnav"
const num6=Symbol("124")
const num7=Symbol("124")

console.log(num6==num7)
console.table([typeof num1,typeof num2,typeof num3,typeof num4,typeof num5,typeof num6,typeof num7])
//non primitive
//arrays ,function,object

const heros=["shakti","bhakti","bhav"]


const obj1={
    name:"arnav",
    age:19
}

const func1=function(){
    console.log("hehe")
}

console.table([typeof heros,typeof obj1,typeof func1])