const peopleWaiting = ['Олег', 'Максим', 'Никита', 'Валя', 'Вова', 'Влад', 'Сава']

const giveParcel = queue => {
    const personName = queue.shift();
    alert(`${personName} получил(а) посылку. В очереди осталось ${queue.length} человек.`);
}

const leaveQueueWithoutParcel = queue => {
    const personName = queue.pop();
    alert(`${personName} не получил(а) посылку и ушел(ла) из очереди.`);
}

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel(peopleWaiting);
}


const getSumOfSequence = number => {
    const sequence = [];

    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }

    const sum = sequence[0] + sequence[sequence.length - 1];
    return sum;
}

console.log(getSumOfSequence(5));


const coffees = ['Латте', 'Американо', 'Капучино']

const coffeeName = prompt('Поиск кофе по названию:')

const coffeeIndex = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase());

if (coffeeIndex !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[coffeeIndex]}. Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}


const prices = [1.5, 1, 2];

updatedPrices = prices.map(price => price + 0.5);

coffees.forEach((coffee, index) => {
    alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} Долар.`);
});


const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const esttimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));

    if (esttimation >= 1 && esttimation <= 10) {
        clientsEstimations.push(esttimation);
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}.`);


const numbers = [10, 4, 100, -5, 54, 2]

let sumOfCubes1 = 0;

for (let i = 0; i < numbers.length; i++) {
    sumOfCubes1 += numbers[i] ** 3;
}

console.log(`Сумма кубов массива циклом for: ${sumOfCubes1}`);

let sumOfCubes2 = 0;

for (let number of numbers) {
    sumOfCubes2 += number ** 3;
}

console.log(`Сумма кубов массива циклом for of: ${sumOfCubes2}`);

let sumOfCubes3 = 0;

numbers.forEach(number => {
    sumOfCubes3 += number ** 3;
});

console.log(`Сумма кубов массива методом forEach: ${sumOfCubes3}`);

let sumOfCubes4 = 0;

numbers.reduce((acc, number) => {
    sumOfCubes4 += number ** 3;
    return acc;
}, 0);

console.log(`Сумма кубов массива методом reduce: ${sumOfCubes4}`);