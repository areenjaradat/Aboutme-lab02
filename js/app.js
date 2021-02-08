`use strict`

let confUser =confirm('hello,now you will have 5 questions you have to answer then by  y or n')

console.log('click yes or no' +confUser)

if (confUser){
    alert('good lets start')
}else{
    alert('omg i am dissapointed')
}

let q1 = prompt('Do I like travil to maldives?');
console.log('click yes or no')

let q2 = prompt('Do you my  name?');
console.log('click yes or no' +q2)

let q3 = prompt('DO i have job before?');
console.log('click yes or no' +q3)

let q4 = prompt('Is it my old 24?');
console.log('click yes or no' +q4)



let q5 = prompt('i am your friend?');
console.log('click yes or no' +q5)


if (q1=='y' ||q1.toUpperCase()=='Y' ){
    alert('your answer for this quistion(Do I like travil to maldives?): '+q1)
} else if(q1=='n' ||q1.toUpperCase()=='N'){
    alert('i would love to travel to maldives ')
}else{
    alert('wrong answer')
} 

if (q2=='y' ||q2.toUpperCase=='Y' ){
    alert('your answer for this quistion(Do you my  name?): '+q2)
    } else if(q2=='n' ||q2.toUpperCase()=='N'){
      alert('omg you don\'t know my name ')
    }else{
        alert('wrong answer')
    } 

if (q3=='y' ||q3.toUpperCase()=='Y' ){
    alert('your answer for this quistion(DO i have job before?): '+q3)
} else if(q3=='n' ||q3.toUpperCase()=='N'){
    alert('i don\'t have a job ')
}else{
    alert('wrong answer')
} 

if (q4=='y' ||q4.toUpperCase()=='Y' ){
    alert('your answer for this quistion(Is it my old 24?): '+q4)
    } else if(q4=='n' ||q4.toUpperCase()=='N'){
        alert('don\'t know my old')
    }else{
        alert('wrong answer')
    } 

if (q5.toLowerCase=='y' ||q5.toUpperCase()=='Y' ){
    alert('your answer for this quistion(i am your friend?): '+q5)
} else if(q5.toLowerCase=='n' ||q5.toUpperCase()=='N'){
    alert('i ma not your friend why you are here ')
} else{
    alert('wrong answer')
}  

let username = prompt('tell me your name');
confirm("hello "+username+" welcome in our page i hope you will has benefit info")