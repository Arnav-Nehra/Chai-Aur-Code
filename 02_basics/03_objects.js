//  two ways to declare object
//singleton
//Object.create

//object literals

const mysym=Symbol("key1")

const User={
    username:"arnav",
    "full name":"arnav nehra",
    [mysym]:"abc12",//to declare an Symbol we need to use[]
    age:19,
    location:"sikar",
    email:"arnavnehra@meta.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// two ways to access an object 
//the first one is very common,and both are true
console.log(User.email)//first method
console.log(User["email"])//second method

//if the value is declared like fullname then
//you cannot access it with first method 

console.log(User["full name"])
console.log(User[mysym])


User.email="arnav@chatgpt.com"
//Object.freeze(User)
User.email="arnav@microsoft.com"
console.log(User["email"])

//.freeze doesn't allows to perform any operation

User.greeting= function(){
    console.log(`welcome ${User.username} to our website`)
}

User.twogreetingfunction=function(){
    console.log(`Hello Js User,${this.username}`);
}

console.log(User.greeting())
console.log(User.twogreetingfunction())

console.log(user.greeting) //this is also used which has a different return type