import readlineSync from 'readline-sync';

const welcome = () => { console.log('Welcome to the Brain Games!'); console.log(); };
const askName = () => readlineSync.question('May I have your name?: ');
const hello = str => console.log(`Hello, ${str}`);

export { askName, hello, welcome };
