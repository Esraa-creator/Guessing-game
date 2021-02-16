'use strict';
alert('Welcome in my web page ,would you like to play guessing game about me ?');
let userName = prompt('Tell me your name,please!');
alert('welcome to my web page ' + userName);

let guessing = prompt('Do you think I love spicy food ?');
guessing = guessing.toLowerCase();
console.log('Do you think I love spicy food user answer ' + guessing);
if (guessing.toLowerCase() === 'yes') {
  console.log('True');
  alert('True');
} else if (guessing.toLowerCase() === 'no') {
  alert('Why no ?');
  console.log('Why no');
} else {
  console.log('error');
  alert('please enter yes or no');
}

let guessing1 = prompt('Do you think I love winter?');
guessing1 = guessing1.toLowerCase();
console.log('Do you think I love winter user answer ' + guessing1);
if (guessing1.toLowerCase() === 'yes') {
  console.log('True');
  alert('True');
} else if (guessing1.toLowerCase() === 'no') {
  alert('Why no ?');
  console.log('Why no');
} else {
  console.log('error');
  alert('please enter yes or no');
}

let guessing2 = prompt('Do you think I love being healthy?');
guessing2 = guessing2.toLowerCase();
console.log('Do you think I love being healthy ' + guessing2);
if (guessing2.toLowerCase() === 'yes') {
  console.log('True');
  alert('True');
} else if (guessing2.toLowerCase() === 'no') {
  alert('Why no ?');
  console.log('Why no');
} else {
  console.log('error');
  alert('please enter yes or no');
}

let guessing3 = prompt('Do you think I love reading?');
guessing3 = guessing3.toLowerCase();
console.log('Do you think I love reading user answer ' + guessing3);
if (guessing3.toLowerCase() === 'yes') {
  console.log('True');
  alert('True');
} else if (guessing3.toLowerCase() === 'no') {
  alert('Why no ?');
  console.log('Why no');
} else {
  console.log('error');
  alert('please enter yes or no');
}


let guessing5 = prompt('Do you think I am lovely person?');
guessing5 = guessing5.toLowerCase();
console.log('Do you think I am lovely person user answer ' + guessing5);
if (guessing5.toLowerCase() === 'yes') {
  console.log('True');
  alert('True');
} else if (guessing5.toLowerCase() === 'no') {
  alert('Why no ?');
  console.log('Why no');
} else {
  console.log('error');
  alert('please enter yes or no');
}


// let question = prompt('How old am I?');
// while (question > 23) {
//   alert('too high');
//   question = prompt('too high ');
// }


// { breaks; }

let count = 0;
let weight = Number(prompt('How much do I weigh ?'));
while (weight === '' && weight === null) {
  weight = Number(prompt('How much do I weigh ?'));
}


for (let i = 0; i < 3; i++) {
  if (weight > 58) {
    alert('too high');
    weight = (prompt('How much do I weigh ?'));
  }
  else if (weight < 58) {
    alert('too low');
    weight = Number(prompt('How much do I weigh ?'));
  }
  else if (weight === '58') {
    alert('thats right');
    count++;
    alert('your score is : ' + count);
    break;

  }
}

let tall = Number(prompt('How tall am I ?'));
while (tall === '' && tall === null) {
  tall = (prompt('How tall am I ?'));
}

for (let i = 0; i < 3; i++) {
  if (tall > 171) {
    alert('too high');
    tall = Number(prompt('How tall am I ?'));
  }
  else if (tall < 171) {
    alert('too low');
    tall = Number(prompt('How tall am I ?'));
  }
  else if (tall === ' 171') {
    alert('thats right');
    count++;
    alert('your score is : ' + count);
    { break; }
  }
}

let car = (prompt('How many cars do I own ?'));
while (car === '' && car === null) {
  car = Number(prompt('How many cars do I own ?'));
}
for (let i = 0; i < 3; i++) {
  if (car > 1) {
    alert('too high');
    car = Number(prompt('How many cars do I own ?'));
  }
  else if (car < 1) {
    alert('too low');
    car = Number(prompt('How many cars do I own ?'));
  }
  else if (car === 1) {
    alert('thats right');
    count++;
    alert('your score is : ' + count);
    { break; }
  }
}

let month = (prompt('In which month I was born?'));
while (month === '' && month === null) {
  month = Number(prompt('In which month I was born?'));
}
for (let i = 0; i < 3; i++) {
  if (month > 5) {
    alert('too high');
    month = Number(prompt('In which month I was born?'));
  }
  else if (month < 5) {
    alert('too low');
    month = Number(prompt('In which month I was born?'));
  }
  else if (month === 5) {
    alert('thats right');
    count++;
    alert('your score is : ' + count);
    { break; }
  }
}

let age = (prompt('how old am I?'));
while (age === '' && age === null) {
  age = Number(prompt('how old am I ?'));
}
for (let i = 0; i < 3; i++) {
  if (age > 23) {
    alert('too high');
    age = Number(prompt('how old am I ?'));
  }
  else if (age < '23') {
    alert('too low');
    age = Number(prompt('how old am I ?'));
  }
  else if (age === '23') {

    alert('thats right');
    count++;
    alert('your score is : ' + count);
    { break; }
  }
}


let arr = ['PARIS', 'ROME', 'Amsterdam', 'Barcelona', 'Beirut', 'Istanbul', 'Florence'].toLowerCase();
let guess = prompt('what do you think the  most beautiful citie in the world I would love to visit?PARIS,ROME ,Amsterdam,Barcelon,Beirut,Istanbul,Florence');

console.log('multiple possible correct answers->', arr);

for (let i = 0; i < 6; i++) {
  if (guess === arr[3]) {
    alert(' yes , you are right');
    count++;
    break;
  }
  else {
    guess = prompt('no , that is not right')
  }

}
alert('the  most beautiful citie in the world I would love to visit? Barcelona ');


