'use strict';


var seattleloc = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  AvgCookie: 6.3,
  cookieSalesPerHour: [],
  render: function(){
    var parent = document.getElementById('seattle');

    for(var i = 0; i < cookieSalesPerHour.length; i++) {
      var listItem = document.createElement('li');

      listItem.textContent = this.cookieSalesPerHour[i]; //

      parent.appendChild(listItem);
    }
},

  getRandomCust: function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
  },

  simCookiesPerHour: function() {
    return AvgCookie * getRandomCust(); // This is total simulated cookies in an hour
  },

  simCookiesPerDay : function() {
  	var hoursOpenPerDay = 14;
    for(var i = 0; i < hoursOpenPerDay; i++) {
      cookieSalesPerHour[i] = simCookiesPerHour();
    }

  },

};

// var tokyoloc = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   AvgCookie: 1.2,
//   render: function(){
//     var parent = document.getElementById('tokyo');

//     for(var i = 0; i < cookieSalesPerHour.length; i++) {
//       var listItem = document.createElement('li');

//       listItem.textContent = this.cookieSalesPerHour[i]; //

//       parent.appendChild(listItem);
//     }

// },

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

// },

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

// },

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
  
// },

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


