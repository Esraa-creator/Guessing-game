'use strict';
alert('Welcome in my web page ,would you like to play guessing game about me ?');
let userName = prompt('Tell me your name,please!');
alert('welcome to my web page ' + userName);

let guessing = prompt('Do you think I love spicy food ?');
guessing = guessing.toLowerCase();

if (guessing.toLowerCase() === 'yes' ||guessing.toLowerCase() === 'y') {
  console.log('True');
  alert('True');
} else if (guessing.toLowerCase() === 'no' || guessing.toLowerCase() === 'n') {
  alert('Why no ?');
 
} else {
  
  alert('please enter yes or no');
}

let guessing1 = prompt('Do you think I love winter?');
guessing1 = guessing1.toLowerCase();
if (guessing1.toLowerCase() === 'yes' || guessing1.toLowerCase() === 'y') {
  alert('True');
} else if (guessing1.toLowerCase() === guessing1.toLowerCase() === 'n') {
  alert('Why no ?');
} else {
  alert('please enter yes or no');
}

let guessing2 = prompt('Do you think I love having a healthy lifestyle?');
guessing2 = guessing2.toLowerCase();
if (guessing2.toLowerCase() === 'yes' || guessing2.toLowerCase() === 'y') {
  alert('True');
} else if (guessing2.toLowerCase() === 'no' || guessing2.toLowerCase() === 'n') {
  alert('Why no ?');
} else {
  alert('please enter yes or no');
}

let guessing3 = prompt('Do you think I love reading?');
guessing3 = guessing3.toLowerCase();
if (guessing3.toLowerCase() === 'yes' || guessing3.toLowerCase() === 'y') {
  alert('True');
} else if (guessing3.toLowerCase() === 'no' || guessing3.toLowerCase() === 'n') {
  alert('Why no ?');
} else {
  alert('please enter yes or no');
}


let guessing5 = prompt('Do you think I am lovely person?');
guessing5 = guessing5.toLowerCase();
if (guessing5.toLowerCase() === 'yes' || guessing5.toLowerCase() === 'y') {
  alert('True');
} else if (guessing5.toLowerCase() === 'no' || guessing5.toLowerCase() === 'n') {
  alert('Why no ?');
} else {
  alert('please enter yes or no');
}



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
let guess = prompt('can you guess what is the city I would love to vist? PARIS, ROME, Amsterdam, Barcelon, Beirut, Istanbul or Florence');


for (let i = 0; i < 6; i++) {
  if (guess === arr[3]) {
    alert('Yes, you are right!');
  }
  else {
    let msg = 'No, that is not right'
      if(i < 5){
        msg = msg + ', Try again'
        prompt(msg);
      }else{
          guess = prompt(msg);
      }
    
  }

}
alert('the  most beautiful citie in the world I would love to visit? Barcelona ');


