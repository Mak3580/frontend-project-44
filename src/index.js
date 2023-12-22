import readlineSync from 'readline-sync';
import {
  getRendom,
  parity,
  math,
  gcd,
  buildProgress,
  checkPrime,
} from './number.js';

const hi = () => {
  console.log('Welcome to the Brain Games!');
};

const que = (question = 'May I have your name? ') => {
  const name = readlineSync.question(question);
  console.log(`Hello, ${name}!`);
  return name;
};

const brainGames = () => {
  hi();
  que();
};

const brainEven = (count = 3) => {
  hi();
  const name = que();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < count; i += 1) {
    const rendVar = getRendom(20);
    const isParity = parity(rendVar);
    console.log(`Question: ${rendVar}`);
    const answer = readlineSync.question('Your answer: ') === 'yes';
    if (answer !== isParity) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

const brainCalc = (count = 3) => {
  const map = ['+', '-', '*'];
  hi();
  const name = que();
  console.log('What is the result of the expression?');
  for (let i = 0; i < count; i += 1) {
    const task = [getRendom(50), getRendom(50), map[getRendom(3)]];
    console.log(`Question: ${task[0]} ${task[2]} ${task[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== `${math(task)}`) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${math(task)}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

const brainGcd = (count = 3) => {
  hi();
  const name = que();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < count; i += 1) {
    const task = [getRendom(50), getRendom(50)];
    console.log(`Question: ${task[0]} ${task[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== `${gcd(task[0], task[1])}`) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd(task[0], task[1])}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

const brainProgression = (count = 3) => {
  hi();
  const name = que();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < count; i += 1) {
    const firstInt = getRendom(15);
    const step = getRendom(7) + 2;
    const progress = buildProgress(firstInt, step);
    const secretKey = getRendom(9);
    const secret = progress[secretKey];
    progress[secretKey] = '..';
    console.log(`Question: ${progress.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== `${secret}`) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${secret}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

const brainPrime = (count = 3) => {
  hi();
  const name = que();
  const map = {
    true: 'yes',
    false: 'no',
  };
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < count; i += 1) {
    const secret = getRendom(50);
    const isPrime = checkPrime(secret);
    console.log(`Question: ${secret}`);
    const answer = readlineSync.question('Your answer: ') === 'yes';
    if (answer !== isPrime) {
      console.log(`'${map[answer]}' is wrong answer ;(. Correct answer was '${map[isPrime]}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export {
  hi,
  que,
  brainGames,
  brainEven,
  brainCalc,
  brainGcd,
  brainProgression,
  brainPrime,
};
