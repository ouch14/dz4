// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math
const array = [1, 2, 3, 4, 6, 710, 34013, 13];
  console.log(Math.min(...array));

// 2.функция multiply не принимает явно никаких параметров
function multiply() {
    let multiplyResult = 1;
    for(let i=0; i< arguments.length; i++) {
      multiplyResult *= arguments[i];
    }
      return multiplyResult;
}
    console.log(multiply(100,200,83902,1230));

multiply(100, 200, 83902, 1230); // В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.
const product = {
  productName: "Water",
  price: 20,
  count: 3,
};

function totalPrice({price, count}) {
  return price * count;
}
  console.log(totalPrice(product));

//4. написать объект в котором будет свойство items (изначально пустой массив),
// метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items
// метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.
  const itemsList = {
    items :[],
    setItems(array) {
    this.items = array;
    },
    sum() {
      return this.items.reduce((sum, cuurent) => sum + cuurent);
    },
    maxValue() {
      return Math.max(...this.items);
    }
  };
    itemsList.setItems(array);
    console.log(itemsList.sum());
    console.log(itemsList.maxValue());

// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr

const predictsArr = [
  "Удача придет откуда не ждете.",
  "Давние долги будут возвращены вам.",
  "Вас ожидает неожиданное денежное поступление.",
  "Все неоконченные дела будут завершены.",
  "Яркое приключение уже поджидает вас.",
  "Планирование времени поможет вам не опоздать на встречу.",
  "Интуиция на этот раз не подведет вас. Используйте это.",
  "Прислушайтесь к себе и ответ на вопрос будет найден.",
  "Появится возможность отправиться в дорогу.",
  "Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.",
  "Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.",
  "Одежда, которая вас старит, не достанется вам.",
]

const obj = {
  predictions: [],
  setPredictions(arr) {
    this.predictions = arr;
  },
  showPrediction() {
    console.log(this.predictions[this.takeNumber()]);
  },
  takeNumber() {
    return Math.floor(Math.random() *this.predictions.lenght);
  },
};
const predictions = obj;
predictions.setPredictions(predictsArr);
predictions.showPrediction();
