// problem domain: create web application to calculate hour averages for the shop
// TODO: dynamically generate sales data

'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//function to add element
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}
//Crating an Object
function Shop(shopName, minCustomers, maxCustomers, averageCookiePerCustomer) {
  this.shopName = shopName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiePerCustomer = averageCookiePerCustomer;
  this.hourlyResultsArray = [];
  this.totalSales = 0;
}
//method

Shop.prototype.renderData = function () {

  var tableTr = addElement('tr', tableElem);
  addElement('td', tableTr, this.shopName);
  for (var i = 0; i < this.hourlyResultsArray.length; i++) {
    addElement('td', tableTr, this.hourlyResultsArray[i]);
  }
  addElement('td', tableTr, this.totalSales);


  ///

  //function to render totals in footer  tr 
  // function renderFooter () {
  //   addElement('tr', tableTr,'Total');
  //   // for (var i = 0; i < store.hours.length; i++) {
  //   //   addElement('td', tableTr, store.hours[i]);
  //   // }
  // }

  // addElement('td', tableTr, this.shopName);
  // for (var i = 0; i < this.hourlyResultsArray.length; i++) {
  //   addElement('td', tableTr, this.hourlyResultsArray[i]);
  // }
  //tr

  // function renderFooter{
  //   addElement('td', tableTr,'Total');
  // }
}

// Random Customer sales
function getRandomCustomerSales(shop) {
  for (var i = 0; i < hours.length; i++) {
    var customerCount = Math.floor(Math.random() * (shop.maxCustomers - shop.minCustomers + 1)) + shop.minCustomers;
    var cookieSales = Math.ceil(shop.averageCookiePerCustomer * customerCount);
    shop.hourlyResultsArray.push(cookieSales);
    shop.totalSales += cookieSales;
  }
}
// function to render Hours on header of the table

function renderHours() {
  var tableTr = addElement('tr', tableElem);
  addElement('th', tableTr);
  for (var i = 0; i < hours.length; i++) {
    addElement('th', tableTr, hours[i]);
  }
  addElement('th', tableTr, 'Daily total');
}

var seattle = new Shop('Seattle', 23, 65, 6.3);
getRandomCustomerSales(seattle);

var tokyo = new Shop('Tokyo', 3, 24, 1.2);
getRandomCustomerSales(tokyo);

var dubai = new Shop('Dubai', 11, 38, 3.7);
getRandomCustomerSales(dubai);

var paris = new Shop('Paris', 20, 38, 2.3);
getRandomCustomerSales(paris);

var lima = new Shop('Lima', 2, 16, 4.6);
getRandomCustomerSales(lima);

// var ShopContainer = document.getElementById('Shops');
var shopContainer = document.getElementById('Shops');
var article = addElement('article', shopContainer);
var tableElem = addElement('table', article);

renderHours();

seattle.renderData();
tokyo.renderData();
dubai.renderData();
paris.renderData();
lima.renderData();


// var allStores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];


///hourlyResultsArray

function addFooterRow() {
  //create tr for footer
  // create td elements 14 times + MEGA Total
  var footerRow = addElement('tr', tableElem);
  addElement('td', footerRow, 'Totals');
  // var megaTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var sumCities = 0;
    var megaTotal = 0;
    var td = document.createElement('td');
    footerRow.appendChild(td);

    sumCities += seattle.hourlyResultsArray[i];
    sumCities += tokyo.hourlyResultsArray[i];
    sumCities += dubai.hourlyResultsArray[i];
    sumCities += paris.hourlyResultsArray[i];
    sumCities += lima.hourlyResultsArray[i];
    td.textContent = sumCities;
  }
  var tdMega = document.createElement('td');
  footerRow.appendChild(tdMega);

  megaTotal += seattle.totalSales;
  megaTotal += tokyo.totalSales;
  megaTotal += dubai.totalSales;
  megaTotal += paris.totalSales;
  megaTotal += lima.totalSales;
  tdMega.textContent = megaTotal;
}
addFooterRow();
