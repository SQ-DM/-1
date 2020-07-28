"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let questionOne = prompt("Один из последних просмотренных фильмов?", "");
// let questionTwo = prompt("На сколько оцените его?", "");
// let questionThree = prompt("Один из последних просмотренных фильмов?", "");
// let questionFour = prompt("На сколько оцените его?", "");

// Автоматизация с помощью цикла
// for (let i = 0; i < 2; i++) {
//   let questionOne = prompt("Один из последних просмотренных фильмов?", "");
//   let questionTwo = prompt("На сколько оцените его?", "");
//   // Проверка условий
//   if (
//     questionOne != null &&
//     questionTwo != null &&
//     questionOne != "" &&
//     questionTwo != "" &&
//     questionOne.length < 50
//   ) {
//     personalMovieDB.movies[questionOne] = questionTwo;
//     console.log("done!");
//   } else {
//     console.log("error!");
//     i--;
//   }
// }
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let questionOne = prompt("Один из последних просмотренных фильмов?", "");
    let questionTwo = prompt("На сколько оцените его?", "");
    if (
      questionOne != null &&
      questionTwo != null &&
      questionOne != "" &&
      questionTwo != "" &&
      questionOne.length < 50
    ) {
      personalMovieDB.movies[questionOne] = questionTwo;
      console.log("done!");
    } else {
      console.log("error!");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
detectPersonalLevel();
// personalMovieDB.movies[questionOne] = questionTwo;
// personalMovieDB.movies[questionThree] = questionFour;
console.log(personalMovieDB);

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
//showMyDb();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
