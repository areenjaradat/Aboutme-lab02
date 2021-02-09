`use strict`;
answers=[];
let score = 0;
guessingnumber = parseInt(Math.random() * 11);

let confUser = confirm(
  "hello,now you will have 7 questions you have to answer then by  y or n and 6th on by guessing a number from 0 to 10"
);

//activities.push(['Study',2]);

console.log("click yes or no" + confUser);

if (confUser) {
  alert("good lets start");
} else {
  alert("omg i am dissapointed");
}

let q1 = prompt("Do I like travil to maldives?");
//console.log("click yes or no");
answers.push(["Question1",q1])
console.log("Question1",answers[0][0],answers[1[1]])

let q2 = prompt("Do you my  name?");
//console.log("click yes or no" + q2);

answers.push(["Question2",q2])
console.log("Question2",answers[1][0],answers[1][1])

let q3 = prompt("DO i have job before?");
//console.log("click yes or no" + q3);

answers.push(["Question3",q3])
console.log("Question3",answers[2][0],answers[2][1])

let q4 = prompt("Is it my old 24?");
//console.log("click yes or no" + q4);

answers.push(["Question4",q4])
console.log("Question4",answers[3][0],answers[3][1])

let q5 = prompt("i am your friend?");
//console.log("click yes or no" + q5);

answers.push(["Question5",q5])
console.log("Question5",answers[4][0],answers[4][1])

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

answers.push(["Question6",q6])
console.log("Question6",answers[5][0],answers[5][1])

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

answers.push(["Question7",q7])
console.log("Question7",answers[6][0],answers[6][1])

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
