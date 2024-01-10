function saymyname(){
    console.log('H')
    console.log('I')
    console.log('T')
    console.log('E')
    console.log('S')
    console.log('H')
}

//saymyname()

function addTwoNumbers(number1,number2){
    return number1+number2
}

const result=addTwoNumbers(5,2)
console.log(`Result ${result}`)

function loginUserMessage(username='sam'){
    if(username===undefined){
        //console.log('Please enter a username :')
        return ('Please Enter a Username')
    }
    return (`${username} just logged in `)
}

console.log(loginUserMessage('arnav'))

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,400,500));

const user={
    username:'hanu',
    price:'199'
}

function handleObject(anyobject){
    return (`The username is ${anyobject.username} and the price is ${anyobject.price}`)
}

console.log((handleObject (user)))
console.log(handleObject({
    username:'abc',
    price:'11'
}))
