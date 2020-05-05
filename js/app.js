'use strict';

var seattleloc = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  AvgCookie: 6.3,
  cookieSalesPerHour: [],

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

var tokyoloc = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  AvgCookie: 1.2,

  getRandomCust: function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
  }
},

var dubailoc = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  AvgCookie: 3.7,

  getRandomCust: function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
  }
}

var parisloc = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  AvgCookie: 2.3,

  getRandomCust: function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
  }
}

var limaloc = {
  name: 'lima',
  minCust: 2,
  maxCust: 16,
  AvgCookie: 4.6,

  getRandomCust: function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
  }
} 


