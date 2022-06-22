const wakeUp = () => 'Acordando!!';
const coffeTime = () => 'Bora tomar café!!';
const sleepTime = () => 'Partir dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(coffeTime);
doingThings(sleepTime);
