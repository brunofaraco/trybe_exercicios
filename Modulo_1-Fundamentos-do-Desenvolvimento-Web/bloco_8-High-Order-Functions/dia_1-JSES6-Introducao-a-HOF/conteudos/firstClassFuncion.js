function sum(number1, number2) {
    return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]

const sayHello = () => 'hello trybers';

const printGreeting = (callback) => console.log(callback());

printGreeting(sayHello);

const sumFixAmount = (amount) => (number) => amount + number;

const initialSum = sumFixAmount(15)
console.log(initialSum(5)); 