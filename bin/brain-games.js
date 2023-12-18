#!/usr/bin/env node
import question from '../src/cli';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${question('May I have your name? ')}!`);
