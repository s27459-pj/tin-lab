// auto{rok, przebieg, cena_wyjsciowa, cena_koncowa}.
const car = {
  year: undefined,
  mileage: undefined,
  startingPrice: 520000,
  finalPrice: undefined,

  // a) Metoda, która powiększa cenę wyjściową o 1000.
  increaseStartingPrice() {
    this.startingPrice += 1000;
  },

  // b) Metoda, która obniża cenę końcową o 1000 za każdy rok wieku
  //    auta (względem ceny wyjściowej).
  decreaseFinalPriceByAge() {
    const now = new Date();
    this.finalPrice -= (now.getFullYear() - 2019) * 1000;
  },

  // c) Metoda, która obniża cenę końcową o 10000 za każde
  //    100000km przebiegu auta.
  decreaseFinalPriceByMileage() {
    this.finalPrice -= Math.floor(this.mileage / 100000) * 10000;
  },

  // d) Metoda, która dopisuje do auta podany przebieg i rok
  //    (automatycznie przeliczając cenę wg powyższych funkcji).
  new(mileage, year, startingPrice) {
    this.mileage = mileage;
    this.year = year;
    this.startingPrice = startingPrice;

    // Obliczenia ceny wyjściowej
    this.finalPrice = startingPrice;
    this.increaseStartingPrice();
    this.decreaseFinalPriceByAge();
    this.decreaseFinalPriceByMileage();
  },

  printPrices(carNumber) {
    console.log(
      `Car ${carNumber} starting price: ${this.startingPrice}, final price: ${this.finalPrice}`
    );
  },
};

// 11.2 Stwórz tablicę obiektów typu auto oraz funkcje do niej
const carCollection = [];
// e) Funkcja, która dopisze auto do tablicy samochodow, jesli jego
//    cena jest wieksza niz 10000.
function addCarIfPriceAbove(car, price) {
  if (car.finalPrice >= price) {
    carCollection.push(car);
  }
}
// f) Funkcja, ktora dla wszystkich aut z tablicy zwieksza rok o 1.
function increaseYearForAllCars() {
  carCollection.forEach((car) => {
    car.year += 1;
  });
}

// Object.create() kopiuje prototyp obiektu car
const car1 = Object.create(car);
car1.new(100_000, 2010, 52_000);
const car2 = Object.create(car);
car2.new(200_000, 2011, 32_000);
const car3 = Object.create(car);
car3.new(250_000, 2019, 40_000);

car1.printPrices(1);
car2.printPrices(2);
car3.printPrices(3);

const minPrice = 10_000;
addCarIfPriceAbove(car1, minPrice);
addCarIfPriceAbove(car2, minPrice);
addCarIfPriceAbove(car3, minPrice);
increaseYearForAllCars();
console.log("Size of car collection:", carCollection.length);
