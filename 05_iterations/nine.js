const myNums=[1,2,3,4]

const myTotal=myNums.reduce(function(acc,currval) {
    console.log(`acc:${acc} and currval${currval}`)
    return acc+currval
},0)

console.log(myTotal)


// you generally use .reduce() while summing up the value in shopping cart
const shoppingCart=[
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'web dev course',
        price:4999
    },
    {
        itemName:'android dev course',
        price:8999
    },
    {
        itemName:'data science course',
        price:11999
    },
    {
        itemName:'ai & ml course',
        price:19999
    },
]

const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay)