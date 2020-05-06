// need an array to store the hours

//object literal for each store
////min customer each hour -given
////max customer each hour -given
////avg cookie sold per customer for each hour -given
//// make an array that holds the customers for each hour
//// need a random number between the min and max
// make an array that holds the number of cookies sold each hour
//// multiply random customers by the average cookies each customers buy
//// this is what we want to put on the DOM
// total cookies for the day ::after
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var seattle = {
//   name: 'Seattle',
//   minCustomersEachHour: 23,
//   maxCustomersEachHour: 65,
//   averageCookiesSoldPerCustomer: 6.3,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   calcCustomersEachHour: function(){
//     // calculate the customers each hour and place in array
//     for(var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.customersEachHour.push(customersThisHours);
//     }
//   },

// calcCookiesSoldEachHour: function(){
//   // multiply the customers by the average cookies each customer buys
//   for(var i=0; i<this.customersEachHour.length; i++){
//     var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

//     this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

//     this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; // this will take the total cookies and add the variable
//   }
// },
//   render: function(){
//     seattle.calcCustomersEachHour();
//     seattle.calcCookiesSoldEachHour();
//     var seattleElement = document.getElementById('seattle');
//     // get the parent element from the DOM
//     // 1. Create an Element
//     // 2. fill it with text content
//     // 3. Append
//     // render the name of the store
//     var listItem = document.createElement('h2');
//     listItem.textContent = this.name;
//     seattleElement.appendChild(listItem);

//     //render cookiesSoldEachHour
//     for(var i=0; i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       seattleElement.appendChild(listItem);
//     }
//     // this will render totalCookiesForTheDayToTheDOM
//     listItem = document.createElement('li');
//     listItem.textContent = this.totalCookiesForTheDay;
//     seattleElement.appendChild(listItem);
//   }
// };

// //got this function
// function getRandomNumber(min,max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; // The max and min are both inclusive
// }

// seattle.render();

///// attempt at a constructor function
///////// FEEDBACK: Possibly remove customersEachHour, cookiesSoldEachHour, totalCookiesForTheDay from the parameters and the actual object since those values are defined in the other functions. Recommended that I either remove them or set them to a default value like 0.

function Location(name, minCustomersEachHour, maxCustomersEachHour, averageCookiesSoldPerCustomer, customersEachHour, cookiesSoldEachHour, totalCookiesForTheDay){
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.customersEachHour = customersEachHour;
  this.cookiesSoldEachHour = cookiesSoldEachHour;
  this.totalCookiesForTheDay = totalCookiesForTheDay;
}

Location.prototype.getRandomNumber = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // The max and min are both inclusive
},

Location.prototype.calcCustomersEachHour = function(){
  // calculate the customers each hour and place in array - in a prototype! //
  for(var i=0; i<hours.length; i++){
    var customersThisHours = this.getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
    this.customersEachHour.push(customersThisHours);
  }
},

Location.prototype.calcCookiesSoldEachHour = function(){
  // multiply the customers by the average cookies each customer buys - in a prototype! //
  for(var i=0; i<this.customersEachHour.length; i++){
    var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

    this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

    this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; // this will take the total cookies and add the variable
  }
},

Location.prototype.render = function(){
  this.calcCustomersEachHour();
  this.calcCookiesSoldEachHour();
  var elementish = document.getElementById(this.name);
  var listItem = document.createElement('li');
  listItem.textContent = this.name;
  elementish.appendChild(listItem);
  // get the parent element from the DOM
  // 1. Create an Element
  // 2. fill it with text content
  // 3. Append
  // render the name of the store

  //render cookiesSoldEachHour
  for(var i=0; i<hours.length; i++){
    listItem = document.createElement('li');
    listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
    elementish.appendChild(listItem);
  }
  // this will render totalCookiesForTheDayToTheDOM
  listItem = document.createElement('li');
  listItem.textContent = this.totalCookiesForTheDay;
  elementish.appendChild(listItem);
};

var Seattle = new Location('Seattle', 23, 65, 6.3, [], [], 0);
var Tokyo = new Location('Tokyo', 3, 24, 1.2, [], [], 0);
var Dubai = new Location('Dubai', 3, 24, 1.2, [], [], 0);
var Paris = new Location('Paris', 20, 38, 2.3, [], [], 0);
var Lima = new Location('Lima', 2, 16, 4.6, [], [], 0);


// seattle.calcCustomersEachHour();
// seattle.calcCookiesSoldEachHour();
// seattle.getRandomNumber();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();



////////////////////////////////////////
////////////////// Tokyo Location

// var tokyo = {
//   name: 'Tokyo',
//   minCustomersEachHour: 3,
//   maxCustomersEachHour: 24,
//   averageCookiesSoldPerCustomer: 1.2,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   calcCustomersEachHour: function(){
//     // calculate the customers each hour and place in array
//     for(var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.customersEachHour.push(customersThisHours);
//     }
//   },

//   calcCookiesSoldEachHour: function(){
//     // multiply the customers by the average cookies each customer buys
//     for(var i=0; i<this.customersEachHour.length; i++){
//       var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

//       this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

//       this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; // this will take the total cookies and add the variable
//     }
//   },
//   render: function(){
//     tokyo.calcCustomersEachHour();
//     tokyo.calcCookiesSoldEachHour();
//     var tokyoElement = document.getElementById('tokyo');
//     // get the parent element from the DOM
//     // 1. Create an Element
//     // 2. fill it with text content
//     // 3. Append
//     // render the name of the store
//     var listItem = document.createElement('h2');
//     listItem.textContent = this.name;
//     tokyoElement.appendChild(listItem);

//     //render cookiesSoldEachHour
//     for(var i=0; i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       tokyoElement.appendChild(listItem);
//     }
//     // this will render totalCookiesForTheDayToTheDOM
//     listItem = document.createElement('li');
//     listItem.textContent = this.totalCookiesForTheDay;
//     tokyoElement.appendChild(listItem);
//   }
// };

// //got this function
// getRandomNumber();

// tokyo.render();


// ////////////////// Dubai Location

// var dubai = {
//   name: 'Dubai',
//   minCustomersEachHour: 3,
//   maxCustomersEachHour: 24,
//   averageCookiesSoldPerCustomer: 1.2,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   calcCustomersEachHour: function(){
//     // calculate the customers each hour and place in array
//     for(var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.customersEachHour.push(customersThisHours);
//     }
//   },

//   calcCookiesSoldEachHour: function(){
//     // multiply the customers by the average cookies each customer buys
//     for(var i=0; i<this.customersEachHour.length; i++){
//       var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

//       this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

//       this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; // this will take the total cookies and add the variable
//     }
//   },
//   render: function(){
//     dubai.calcCustomersEachHour();
//     dubai.calcCookiesSoldEachHour();
//     var dubaiElement = document.getElementById('dubai');
//     // get the parent element from the DOM
//     // 1. Create an Element
//     // 2. fill it with text content
//     // 3. Append
//     // render the name of the store
//     var listItem = document.createElement('h2');
//     listItem.textContent = this.name;
//     dubaiElement.appendChild(listItem);

//     //render cookiesSoldEachHour
//     for(var i=0; i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       dubaiElement.appendChild(listItem);
//     }
//     // this will render totalCookiesForTheDayToTheDOM
//     listItem = document.createElement('li');
//     listItem.textContent = this.totalCookiesForTheDay;
//     dubaiElement.appendChild(listItem);
//   }
// };

// //got this function
// getRandomNumber();

// dubai.render();


// ////////////////// Paris Location

// var paris = {
//   name: 'Paris',
//   minCustomersEachHour: 20,
//   maxCustomersEachHour: 38,
//   averageCookiesSoldPerCustomer: 2.3,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   calcCustomersEachHour: function(){
//     // calculate the customers each hour and place in array
//     for(var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.customersEachHour.push(customersThisHours);
//     }
//   },

//   calcCookiesSoldEachHour: function(){
//     // multiply the customers by the average cookies each customer buys
//     for(var i=0; i<this.customersEachHour.length; i++){
//       var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

//       this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

//       this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; // this will take the total cookies and add the variable
//     }
//   },
//   render: function(){
//     paris.calcCustomersEachHour();
//     paris.calcCookiesSoldEachHour();
//     var parisElement = document.getElementById('paris');
//     // get the parent element from the DOM
//     // 1. Create an Element
//     // 2. fill it with text content
//     // 3. Append
//     // render the name of the store
//     var listItem = document.createElement('h2');
//     listItem.textContent = this.name;
//     parisElement.appendChild(listItem);

//     //render cookiesSoldEachHour
//     for(var i=0; i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       parisElement.appendChild(listItem);
//     }
//     // this will render totalCookiesForTheDayToTheDOM
//     listItem = document.createElement('li');
//     listItem.textContent = this.totalCookiesForTheDay;
//     parisElement.appendChild(listItem);
//   }
// };

// //got this function
// getRandomNumber();

// paris.render();


// ////////////////// Lima Location

// var lima = {
//   name: 'Lima',
//   minCustomersEachHour: 2,
//   maxCustomersEachHour: 16,
//   averageCookiesSoldPerCustomer: 4.6,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   calcCustomersEachHour: function(){
//     // calculate the customers each hour and place in array
//     for(var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.customersEachHour.push(customersThisHours);
//     }
//   },

//   calcCookiesSoldEachHour: function(){
//     // multiply the customers by the average cookies each customer buys
//     for(var i=0; i<this.customersEachHour.length; i++){
//       var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

//       this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

//       this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; // this will take the total cookies and add the variable
//     }
//   },
//   render: function(){
//     lima.calcCustomersEachHour();
//     lima.calcCookiesSoldEachHour();
//     var limaElement = document.getElementById('lima');
//     // get the parent element from the DOM
//     // 1. Create an Element
//     // 2. fill it with text content
//     // 3. Append
//     // render the name of the store
//     var listItem = document.createElement('h2');
//     listItem.textContent = this.name;
//     limaElement.appendChild(listItem);

//     //render cookiesSoldEachHour
//     for(var i=0; i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       limaElement.appendChild(listItem);
//     }
//     // this will render totalCookiesForTheDayToTheDOM
//     listItem = document.createElement('li');
//     listItem.textContent = this.totalCookiesForTheDay;
//     limaElement.appendChild(listItem);
//   }
// };

// //got this function
// getRandomNumber();

// lima.render();


