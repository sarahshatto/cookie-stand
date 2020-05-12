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

var parentElement = document.getElementById('table');

var hours = ['6am', '7am', '8am', '9am', '10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];

function Stores(name, minCustomersEachHour, maxCustomersEachHour, averageCookiesSoldPerCustomer){
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  allStores.push(this);
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

Stores.prototype.renderHours = function(){
  var parentElement = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = '';
  tableRow.appendChild(tableHeader);

  for (var i=0; i < hours.length; i++) {
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }

  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHeader);

  parentElement.appendChild(tableRow);
},


Stores.prototype.render = function(){
  this.calcCustomersEachHour();
  this.calcCookiesSoldEachHour();

  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');

  tableHeader.textContent = this.name;
  tableRow.appendChild(tableHeader);

  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);
  }

  var totalData = document.createElement('td');
  totalData.textContent = this.totalCookiesForTheDay;
  tableRow.appendChild(totalData);
  // append the table row to the parent element
  parentElement.appendChild(tableRow);
};

function renderFooterRow(){
  var totalOfAllTotals = 0;
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = 'Hourly Total';
  tableRow.appendChild(tableData);

  // outer loop: for each hour
  // inner loop is going to loop over each store
  // access my cookies sold each hour array at the same position as my outer loop
  for(var i=0; i<hours.length; i++){

    var sum = 0;

    for(var j=0; j<allStores.length; j++){
      console.log('inner loop', sum);
      sum += allStores[j].cookiesSoldEachHour[i];
    }

    totalOfAllTotals += sum;
    // totalOfAllTotals = totalOfAllTotal + sum;

    // create a td
    tableData = document.createElement('td');
    // fill it with the sum
    tableData.textContent = sum;
    // append it to the table row
    tableRow.appendChild(tableData);


    // append the total of all totals
    // create a td
    // tableData = document.createElement('td');
    // fill it the total
    tableData.textContent = totalOfAllTotals;
    // append it to the table row
    tableRow.appendChild(tableData);

    // append table row to parent
    parentElement.appendChild(tableRow);
  }
}



// Stores.prototype.rendertotals = function(){

// }
var Seattle = new Stores('Seattle', 23, 65, 6.3);
var Tokyo = new Stores('Tokyo', 3, 24, 1.2);
var Dubai = new Stores('Dubai', 3, 24, 1.2);
var Paris = new Stores('Paris', 20, 38, 2.3);
var Lima = new Stores('Lima', 2, 16, 4.6);


// 3. select the element that I am listening on:
var form = document.getElementById('form');


// set up event handler
function handleFormSubmit(event){
  event.preventDefault();
  //console.log(event.target) to debug
  var newLocation = event.target.formlocation.value;
  var minCustpHr = parseInt(event.target.formmin.value);
  var maxCustpHr = parseInt(event.target.formmax.value);
  var avgCookiespCust = parseInt(event.target.formavgcookies.value);

  console.log('the new location requested is ', newLocation);
  console.log('the minimum customers per hour is ', minCustpHr);
  console.log('the maximum customers per hour is ', maxCustpHr);
  console.log('Average Cookies sold per customer is ', avgCookiespCust);
  // console.log(variable) //
  new Stores(newLocation, minCustpHr, maxCustpHr, avgCookiespCust);

  var newStore = new Stores(newLocation, minCustpHr, maxCustpHr, avgCookiespCust);

  newStore.render();
  // now we have an array called NewStore that has all of the stores including the new location in it.
  // delete the table, rebuild it, then clear the table.
  // //

  // //clear the table
  // parentElement.textContent = '';


  // // tableHeader();

  // // loop over all of my object instances including new addition, call the render function on all of them (which calls all of the assosciated functions), renders the table, then render the footer row.
  // for(var i=0; allStores.length; i++){
  //   allStores[i].render();

  //   renderFooterRow();

  // }

}

Stores.prototype.renderHours();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
renderFooterRow();


// 4. set up my event listener:
form.addEventListener('submit', handleFormSubmit);

//table building from class demo
// looking at the table, we see the header, the body and the footer.
// the header content holds all of these hours, so it's not unique to any one "Store", it's for everyone, so it will be a function.
// // 1. Select the parent element (tbody)
// this is for "seattle"
// // // var parentElement =document.getElementById('table');
//
// // 2. Create a new element (tr / tablerow)
// // // var tableRow = document.createElement('tr');
//
// // 3. Create a header row (th / table header)
//  // // var tableHeader = document.createElement('th');
//
// // 4. fill it with text content, (this.name)
// // // tableHeader.textContent = this.name;
//
// // 5. Append to the parent/ table row.
// // // tableRow.appendChild(tableHeader);
//
// this is for the cookies sold each hour (any time I have an array to loop through, use a for loop!),
//
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



// function renderFooterRow(){
//   var totalOfAllTotals = 0; // total of all totals = 0
//   // create a table row
//   var tableRow = document.createElement('tr');
//   // crete td
//   var tableData = document.createElement('td');
//   // fill with word 'total'
//   tableData.textContent = 'Hourly Total';
//   // append it to the table row
//   tableRow.appendChild(tableData);
//   // append table Row to parent
//   parentElement.appendChild(tableRow);
//   // inner loop over each store
//   // outer loop looking at the hours
//   //inner array needs to access the array of cookies sold each hour at the same position as my outer loop
//   for(var i=0; i<hours.length; i++) {

//     var sum = 0;

//     for (var j=0; j<allStores.length; j++) {
//       sum += allStores[j].cookiesSoldEachHour[i];
//     }

//     totalOfAllTotals += sum;

//     // create a td
//     tableData = document.createElement('td');
//     // fill it with the sum
//     tableData.textContent = sum;
//     // append it to the table row
//     tableRow.appendChild(tableData);
//   }
//   //create a td
//   tableData = document.createElement('td');
//   tableData.textContent = totalOfAllTotals;
//   tableRow.appendChild(tableData);

//   parentElement.appendChild(tableRow);
// };

