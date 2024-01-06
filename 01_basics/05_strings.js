const name="arnav nehra" 
const repocount=20
 
/* console.log(name+" "+repocount+"ok")
//this is not a good method and is outdated
// so  we use string interpolation 

console.log(`hello my name is ${name} and the number of repo counts are${repocount}`) */

//another way to declare string is

const gameName=new String("god-of-war")
console.log(gameName.charAt(2))
console.log(gameName.indexOf("o"));

const newstring=gameName.substring(0,5)
console.log(newstring)

const anotherstring=gameName.slice(-4,-1)
console.log(anotherstring);

const newstringg="   arnav   "
console.log(newstringg)

console.log(newstringg.trim());

const url="http://arnavnehra.com/abc%20def%20ghe"
console.log(url.replace("%20","-"));


console.log(url.includes(".com"))

console.log(gameName.split('-'));