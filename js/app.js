/*`use strict`;

let score = 0;
guessingnumber = parseInt(Math.random() * 11);

let confUser = confirm(
  "hello,now you will have 7 questions you have to answer then by  y or n and 6th on by guessing a number from 0 to 10"
);

console.log("click yes or no" + confUser);

if (confUser) {
  alert("good lets start");
} else {
  alert("omg i am dissapointed");
}

let q1 = prompt("Do I like travil to maldives?");
console.log("click yes or no");

let q2 = prompt("Do you my  name?");
console.log("click yes or no" + q2);

let q3 = prompt("DO i have job before?");
console.log("click yes or no" + q3);

let q4 = prompt("Is it my old 24?");
console.log("click yes or no" + q4);

let q5 = prompt("i am your friend?");
console.log("click yes or no" + q5);

let q6 = prompt(" guess a number");
console.log("the guess num" + q6);

guessinguser = parseInt(q6);
for (let i = 1; i < 4; i++) {
  guessinguser = parseInt(q6);

  if (guessinguser === guessingnumber) {
    score++;
    console.log('q6='+score);
    break;
  } else if (guessinguser < guessingnumber) {
    alert("to low");
  } else if (guessinguser > guessingnumber) {
    alert("to high");
  }
  q6 = prompt("again  guess the  number");
}
if (guessinguser !== guessingnumber) {
  alert("the number was " + guessingnumber);
}

let q7 = prompt("guess the most famous place in jordan");

let places = [
  "petra",
  "wadi rum",
  "aqaba",
  "dead sea",
  "roman theater",
  "jerash",
];
flag = false;
for (let index = 1; index < 6; index++) {
  for (let j = 0; j < places.length; j++) {
    if (places[j] === q7.toLowerCase()) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    q7 = prompt("guess again the most famous place in jordan");
  }
}
if(flag){score++;console.log('q7='+score)}

if (q1.toLowerCase() == "y") {
  alert("your answer for this quistion(Do I like travil to maldives?): " + q1);
  score++;
  console.log('q1='+score);
} else if (q1 == "n" || q1.toUpperCase() == "N") {
  alert("i would love to travel to maldives ");
} else {
  alert("wrong answer");
}

if (q2.toLowerCase() == "y") {
  alert("your answer for this quistion(Do you my  name?): " + q2);
  score++;
  console.log('q2='+score);
} else if (q2.toLowerCase() == "n" ) {
  alert("omg you don't know my name ");
} else {
  alert("wrong answer");
}

if (q3.toLowerCase() == "y") {
  alert("your answer for this quistion(DO i have job before?): " + q3);
  score++;
  console.log('q3='+score);
} else if (q3.toLowerCase() == "n" ) {
  alert("i don't have a job ");
} else {
  alert("wrong answer");
}

if (q4.toLowerCase() == "y") {
  alert("your answer for this quistion(Is it my old 24?): " + q4);
  score++;
  console.log('q4='+score);
} else if (q4.toLowerCase() == "n") {
  alert("don't know my old");
} else {
  alert("wrong answer");
}

if (q5.toLowerCase == "y") {
  alert("your answer for this quistion(i am your friend?): " + q5);
  score++;
  console.log('q5='+score);
} else if (q5.toLowerCase == "n") {
  alert("i ma not your friend why you are here ");
} else {
  alert("wrong answer");
}

alert(
  "the most famous places are: " +
    places[0] +
    " " +
    places[1] +
    " " +
    places[2] +
    " " +
    places[3] +
    " " +
    places[4] +
    " " +
    places[5]
);
let username = prompt("tell me your name");
confirm(
  "hello " +
    username +
    " welcome in our page i hope you will has benefit info and your final score is " +
    score
);
*/