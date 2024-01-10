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
