const getName1 = function (name) {
    return `Имя равно ${name}`;
}

function getName2(name) {
    return `Имя равно ${name}`;
}

const getName3 = name => `Имя равно ${name}`

console.log(getName1('Стас'));
console.log(getName2('Стас'));
console.log(getName3('Стас'));


const getSumOfNumbers = (number, type) => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (type === 'even') {
            if (i % 2 === 0) {
                sum += i;
            }
        } else if (type === 'odd') {
            if (i % 2 !== 0) {
                sum += i;
            }
        } else {
            sum += i;
        }
    }
    return sum;
};

console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10));


const getDivisorsCount = number => {
    let count = 0;
    if (Number.isInteger(number) === false || number <= 0) {
        alert('number должен быть целым числом или больше нуля!');
    } else {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count;
    }
};

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));


const checkQuestionAnswer = (question, correctAnswer) => {
    const userAnswer = prompt(question);
    if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
        return alert('Ответ верный');
    } else {
        return alert('Ответ неверный');
    }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

