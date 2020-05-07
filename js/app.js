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

var hours = ['6am', '7am', '8am', '9am', '10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];



function Stores(name, minCustomersEachHour, maxCustomersEachHour, averageCookiesSoldPerCustomer, customersEachHour, cookiesSoldEachHour, totalCookiesForTheDay){
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.customersEachHour = customersEachHour;
  this.cookiesSoldEachHour = cookiesSoldEachHour;
  this.totalCookiesForTheDay = totalCookiesForTheDay;
}

Stores.prototype.getRandomNumber = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // The max and min are both inclusive
},

Stores.prototype.calcCustomersEachHour = function(){
  // calculate the customers each hour // for loop over hours, make a helper function that generates a random number// and push into an array - in a prototype! //
  for(var i=0; i<hours.length; i++){
    var customersThisHours = this.getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
    this.customersEachHour.push(customersThisHours);
  }
},

Stores.prototype.calcCookiesSoldEachHour = function(){
  // multiply the customers by the average cookies each customer buys - in a prototype! //
  for(var i=0; i<this.customersEachHour.length; i++){
    var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

    this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

    this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; // this will take the total cookies and add the variable
  }
},

Stores.prototype.renderhours = function() {
  var parentElement =document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = '';
  tableRow.appendChild(tableHeader);

  for (var i=0; i < hours.length ; i++) {
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
  parentElement.appendChild(tableRow);
},


Stores.prototype.render = function(){
  this.calcCustomersEachHour();
  this.calcCookiesSoldEachHour();
  var parentElement =document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = this.name;
  tableRow.appendChild(tableHeader);
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);
  }
  var tableDatab = document.createElement('td');
  tableDatab.textContent = this.cookiesSoldEachHour[i];
  tableDatab.textContent = this.cookiesSoldEachHour[i];
  tableRow.appendChild(tableDatab);
  // append the table row to the parent element
  parentElement.appendChild(tableRow);
};

var Seattle = new Stores('Seattle', 23, 65, 6.3, [], [], 0);
var Tokyo = new Stores('Tokyo', 3, 24, 1.2, [], [], 0);
var Dubai = new Stores('Dubai', 3, 24, 1.2, [], [], 0);
var Paris = new Stores('Paris', 20, 38, 2.3, [], [], 0);
var Lima = new Stores('Lima', 2, 16, 4.6, [], [], 0);

// console.log('This is my customers each hour array', Seattle.customersEachHour)

Stores.prototype.renderhours();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

//table building from class demo
// looking at the table, we see the header, the body and the footer.
// the header content holds all of these hours, so it's not unique to any one "Store", it's for everyone, so it will be a function.
// // 1. Select the parent element (tbody)
// // // var parentElement =document.getElementById('table');
// this is for "seattle"
// // 2. Create a new element (tr / tablerow)
// // // var tableRow = document.createElement('tr');
// // 3. Create a header row (th / table header)
//  // // var tableHeader = document.createElement('th');
// // 4. fill it with text content, (this.name)
// // // tableHeader.textContent = this.name;
// // 5. Append to the parent/ table row.
// // // tableRow.appendChild(tableHeader);
// this is for the cookies sold each hour (any time I have an array to loop through, use a for loop!),
// for(var i=0; i<this.cookiesSoldEachHour.length; i++){
//   var tableData = document.createElement('td');
//   tableData.textContent = this.cookiesSoldEachHour[i];
//   tableRow.appendChild(tableData);
// }
//1. create a <td>
// var tableDatab = document.createElement('td');
// fill it with content (this.cookiesSoldEachHour[i],
// tableDatab.textContent = this.cookiesSoldEachHour[i];
//   then append it to the <tr>)
// tableRow.appendChild(tableDatab);
//  fill the final cell by:
// // create a td
// // fill it with content (totalCookiesForTheDay)
// // append it to the tr
// // append the tr to the parent (table body)

// header row: for(var i=0; i<this.cookiesSoldEachHour.length; i++){
// var tableData = document.createElement('td');
// tableData.textContent = this.cookiesSoldEachHour[i];
// tableRow.appendChild(tableData);
// // Copy from the other for loop




// Stores.prototype.Renderhours = function() {
//   var parentElement =document.getElementById('table');
//   var tableRow = document.createElement('tr');
//   var tableHeader = document.createElement('th');
//   tableHeader.textContent = '';
//   tableRow.appendChild(tableHeader);

//   for (var i=0; i < hours.length; i++) {
//     tableHeader = document.createElement('th');
//     tableHeader.textContent = hours[i];
//     tableRow.appendChild(tableHeader);
//   }
//   parentElement.appendChild(tableRow);
// },
