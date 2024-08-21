// перше завдання

let farengheight = prompt('введіть кількість градусів скільки ви хочете перевести у градуси цельсія');
let celsia = prompt('введіть кількість градусів скільки ви хочете перевести у градуси по фаренгейту');
let cToF = (farengheight - 32) * 5/9;
let fToC = (celsia * 9/5) + 32;
console.log(`якщо перевести ${farengheight} градусів по фаренгейту у цельсія то це буде ${fToC} градусів цельсія`);
console.log(`якщо перевести ${celsia} градусів по цельсія у градуси по фаренгейту то це буде ${cToF} градусів по фаренгейту`);

// друге завдання

let days = prompt(`напишіть скільки днів у цьому місяці`);
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;
let miliSeconds = seconds * 10;
console.log(`в цьому місяці ${hours} годин,`);
console.log(`${minutes} хвилин,`);
console.log(`${seconds} секунд,`);
console.log(`${miliSeconds} мілісекунд.`);

// третє завдання

let fullHp = 100;
let damage =  Math.ceil(Math.random() * 100);
let hp = fullHp - damage;
console.log(`ви загубили ${damage} hp, тому у вас залишилось ${hp} hp`);

// четверте завдання

const shoppingThingFirst = Number(prompt(`напишіть ціну однієї річі яку ви сьогодні купили в магазині`));
const shoppingThingSecond = Number(prompt(`напишіть ціну другої річі яку ви сьогодні купили в магазині`));
const shoppingThingThird = Number(prompt(`напишіть ціну третьої річі яку ви сьогодні купили в магазині`));
const allThings = shoppingThingFirst + shoppingThingSecond + shoppingThingThird;
const percents = (allThings / 100) * 90;
console.log(`ви витратили ${allThings} грн, але якби ви купували ті самі речі у моєму магазині ви б отримали знижку 10% і сплатили б ${percents} грн`);

// п'яте завдвння

let floorNum = Number.parseFloat(Number.parseInt(Math.random() * 1000) / 100);
console.log(Math.floor(floorNum));
console.log(floorNum);

// шосте завдання показував на уроці

// сьоме завдання показував на уроці

// восьме завдання

const square = prompt(`введіть число якого корень ви хочете дізнатись`);
const resoult = Math.sqrt(square);
console.log(resoult);

// дев'яте завдання

let integerNumber = 42;
let stringNumber = "123";
let parsedNumber = parseInt(stringNumber);
console.log(parsedNumber); 
let convertedString = integerNumber.toString();
console.log(convertedString); 
