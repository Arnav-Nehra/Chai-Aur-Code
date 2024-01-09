//const tinderUser=new Object()
const tinderUser={}
tinderUser.id='123abd'
tinderUser.name='sammy'
tinderUser.isLoggedIn=true

// console.log(tinderUser)

const regularUser={
    email:'arnav@google.com',
    fullname:{
        userfullname:{
            firstname:'arnav',
            lastname:'nehra'
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.firstname);//return undefined cannot access directly

const obj1={
    1:'a',
    2:'b',
    3:'c'
}
const obj2={
    4:'d',
    5:'e',
    6:'f'
}
const obj3={
    7:'g',
    8:'h',
    9:'j'
}
const obj5={obj1,obj2}
const obj4={...obj1,...obj2,...obj3}

// console.log(obj5)
// console.log(obj4)

const obj6=Object.assign({},obj1,obj2,obj3)
// console.log(obj6);


const users=[
    {
        id:1,
        email:'arnav'
    },
    {
        id:2,
        email:'abc'
    },
    {
        id:3,
        email:'ad'
    },
    {
        id:4,
        email:'ar'
    },
    {
        id:5,
        email:'arn'
    }
]

// console.log(users[2].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    coursename:'js hindi',
    price:'free',
    courseinstructor:'hitesh'
}

//now if we want to access instructor many times we need to write
//course.courseinstructor many times

//instead of doing that 

// we can simply write

const{courseinstructor:instructor}=course
//now you can simply access  by saying instructor
//even dont'need course.

console.log(instructor)

//we also learn about api overview and about json files here 
//that when we request data how the data is fetched and provided in the form of json file