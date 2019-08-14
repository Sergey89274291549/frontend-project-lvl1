import { cons, car, cdr } from '@hexlet/pairs';
import {
  greeting, getRandomInt, gameMaker,
} from '..';

const argument = () => cons(getRandomInt(1, 100), getRandomInt(1, 100));
const questionPrint = argument1 => console.log(`Question: ${Number(car(argument1))} and ${Number(cdr(argument1))}`);
const correctAnswerFinder = (argument2) => {
  const numOne = Number(car(argument2));
  const numTwo = Number(cdr(argument2));
  let counter = 1;
  let j = 1;
  while (j <= Math.min(numOne, numTwo)) {
    if ((numOne % j === 0) && (numTwo % j === 0)) {
      counter = j;
    }
    j += 1;
  }
  return counter;
};
const task = () => console.log('Find the greatest common divisor of given numbers!');
const gcd = () => gameMaker(greeting, task, correctAnswerFinder, questionPrint, argument);
export default gcd;
