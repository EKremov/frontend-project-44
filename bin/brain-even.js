import readlineSync from 'readline-sync';
import {welcome} from '../bin/brain-games.js';

welcome();

let name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

let positiveUserAnswersCount = 0; 

export function even() {

    let randomNum = Math.floor(Math.random() * 100);
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    console.log(`Question: ${randomNum}`);
    let answer = readlineSync.question(`Your answer: `);

    if (randomNum % 2 === 0 && answer === 'yes') {
        console.log('Correct!');
        positiveUserAnswersCount += 1;
        chekCount(positiveUserAnswersCount);

    } else if(answer === 'no' && randomNum % 2 !== 0) {
        console.log('Correct!');
        positiveUserAnswersCount += 1;
        chekCount(positiveUserAnswersCount);

    } else if(randomNum % 2 === 0 && answer === 'no') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${name}!`);
    } else if(answer === 'yes' && randomNum % 2 !== 0) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${name}!`);
    } else {
        console.log('Wrong answer');
        return;
    }

    function chekCount(num){
        if(num >= 3) {
            console.log(`Congratulations, ${name}!`);
            return;
        } else {
            even();
        }
    }

}

even();