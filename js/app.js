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

var seattle = {
  name: 'Seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesSoldPerCustomer: 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  calcCustomersEachHour: function(){
    // calculate the customers each hour and place in array
    for(var i=0; i<hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customersThisHours);
    }
  },

  calcCookiesSoldEachHour: function(){
    // multiply the customers by the average cookies each customer buys
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);
      
      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; // this will take the total cookies and add the variable
    }
  },
  render: function(){
    seattle.calcCustomersEachHour();
    seattle.calcCookiesSoldEachHour();
    var seattleElement = document.getElementById('seattle');
    // get the parent element from the DOM
    // 1. Create an Element
    // 2. fill it with text content
    // 3. Append
    // render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    seattleElement.appendChild(listItem);

    //render cookiesSoldEachHour
    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      seattleElement.appendChild(listItem);
    }
    // this will render totalCookiesForTheDayToTheDOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    seattleElement.appendChild(listItem);
  }
};

//got this function
function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // The max and min are both inclusive
}

seattle.render();




////////////////////////////////
////////////////////////////////

// 'use strict';
// alert('I\'m Alive!')

// var seattleloc = {

//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   AvgCookie: 6.3,
//   cookieSalesPerHour: [],
//   render: function(){
//     var parent = document.getElementById('seattle');

//     for(var i = 0; i < cookieSalesPerHour.length; i++) {
//       var listItem = document.createElement('li');

//       listItem.textContent = this.cookieSalesPerHour[i]; //

//       parent.appendChild(listItem);
//     }
//   },

//   getRandomCust: function() {
//     return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
//   },

//   simCookiesPerHour: function() {
//     return AvgCookie * getRandomCust(); // This is total simulated cookies in an hour
//   },

//   simCookiesPerDay : function() {
//     var hoursOpenPerDay = 14;
//     for(var i = 0; i < hoursOpenPerDay; i++) {
//       cookieSalesPerHour[i] = simCookiesPerHour();
//     }
//   },

//   seattleloc.simCookiesPerDay
// };

// var tokyoloc = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   AvgCookie: 1.2,
//   render: function(){
//     var parent = document.getElementById('tokyo');

//     for(var i = 0; i < cookieSalesPerHour.length; i++) {
//       var listItem = document.createElement('li');

//       listItem.textContent = this.cookieSalesPerHour[i];

//       parent.appendChild(listItem);
//     }

//   },

//   getRandomCust: function() {
//     return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
//   },

//   simCookiesPerHour: function() {
//     return AvgCookie * getRandomCust(); // This is total simulated cookies in an hour
//   },

//   simCookiesPerDay : function() {
//   	var hoursOpenPerDay = 14;
//     for(var i = 0; i < hoursOpenPerDay; i++) {
//       cookieSalesPerHour[i] = simCookiesPerHour();
//     }

//   },

// };

// var dubailoc = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   AvgCookie: 3.7,
//   render: function(){
//     var parent = document.getElementById('dubai');

//     for(var i = 0; i < cookieSalesPerHour.length; i++) {
//       var listItem = document.createElement('li');

//       listItem.textContent = this.cookieSalesPerHour[i]; //

//       parent.appendChild(listItem);
//     }

//   },

//   getRandomCust: function() {
//     return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
//   },

//   simCookiesPerHour: function() {
//     return AvgCookie * getRandomCust(); // This is total simulated cookies in an hour
//   },

//   simCookiesPerDay : function() {
//   	var hoursOpenPerDay = 14;
//     for(var i = 0; i < hoursOpenPerDay; i++) {
//       cookieSalesPerHour[i] = simCookiesPerHour();
//     }

//   },

// };

// var parisloc = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   AvgCookie: 2.3,
//   render: function(){
//     var parent = document.getElementById('paris');

//     for(var i = 0; i < cookieSalesPerHour.length; i++) {
//       var listItem = document.createElement('li');

//       listItem.textContent = this.cookieSalesPerHour[i]; //

//       parent.appendChild(listItem);
//     }

//   },

//   getRandomCust: function() {
//     return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
//   },

//   simCookiesPerHour: function() {
//     return AvgCookie * getRandomCust(); // This is total simulated cookies in an hour
//   },

//   simCookiesPerDay : function() {
//   	var hoursOpenPerDay = 14;
//     for(var i = 0; i < hoursOpenPerDay; i++) {
//       cookieSalesPerHour[i] = simCookiesPerHour();
//     }

//   },

// };

// var limaloc = {
//   name: 'lima',
//   minCust: 2,
//   maxCust: 16,
//   AvgCookie: 4.6,
//   render: function(){
//     var parent = document.getElementById('seattle');

//     for(var i = 0; i < cookieSalesPerHour.length; i++) {
//       var listItem = document.createElement('li');

//       listItem.textContent = this.cookieSalesPerHour[i]; //

//       parent.appendChild(listItem);
//     }

//   },

//   getRandomCust: function() {
//     return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
//   },

//   simCookiesPerHour: function() {
//     return AvgCookie * getRandomCust(); // This is total simulated cookies in an hour
//   },

//   simCookiesPerDay : function() {
//     var hoursOpenPerDay = 14;
//     for(var i = 0; i < hoursOpenPerDay; i++) {
//       cookieSalesPerHour[i] = simCookiesPerHour();
//     }

//   },

// };


