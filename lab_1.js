
const myName = 'Стас';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Чеботов Н.М.';
const reasonText = 'мне нравится создавать сайты и видеть результат своей работы';
const numberOfMonth = 1;

const text = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}.
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев.
Я уверен(а), что пройду данный курс до конца!`;

console.log(text);
let myInfoText = `Всем привет! Меня зовут Стас. Сейчас я изучаю язык программирования JavaScript.
До этого я изучал JavaScript 1 месяца.`;


myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT');
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);
let userName = prompt("Как вас зовут?");
let userAge = prompt("Сколько вам лет?");

userName = userName.trim().toLowerCase()
userAge = Number(userAge.trim());

alert(`Вас зовут ${userName} и вам ${userAge} лет`);


let userSrting = prompt("Введите текст для обрезки");
const startSliceIndex = Number(prompt("Введите индекс, с которого нужно начать обрезку строки"));
const endSliceIndex = Number(prompt("Введите индекс, которым нужно закончить обрезать строки"));

userSrting = userSrting.trim();

const string = userSrting.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${string}`);


let userText = prompt("Введите текст");
let wordFromText = prompt("Введите слово из текста");

userText = userText.trim();
wordFromText = wordFromText.trim();

const indexOfWord = userText.indexOf(wordFromText);
const string_2 = userText.slice(0, indexOfWord);

alert(`Результат: ${string_2}`);


let javaScriptDescription = "JavaScript — мультипарадигменный язык программирования.JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."

javaScriptDescription = javaScriptDescription.slice(1, Math.floor(javaScriptDescription.length / 2));
javaScriptDescription = javaScriptDescription.replaceAll("а", "А");
javaScriptDescription = javaScriptDescription.replaceAll(" ", "");
javaScriptDescription = javaScriptDescription.repeat(3);

console.log(`Символ в середине: '${javaScriptDescription[Math.floor(javaScriptDescription.length / 2)]}'`);
console.log(javaScriptDescription);


