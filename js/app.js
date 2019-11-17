// problem domain: create web application to calculate hour averages for the shop
// TODO: dynamically generate sales data

'use strict';
// Defining global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allShops = [];
var shopContainer = document.getElementById('Shops');
var article = addElement('article', shopContainer);
var tableElem = addElement('table', article);
var tableBody = addElement('tbody', tableElem);
var tfoot = addElement('tfoot', tableElem);
var thead = addElement('thead', tableElem);
var footerRow = addElement('tr', tfoot);
var form = document.getElementById('shop-form');

//function to add element
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}
//Creating an Object Shop
function Shop(shopName, minCustomers, maxCustomers, averageCookiePerCustomer) {
  this.shopName = shopName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiePerCustomer = averageCookiePerCustomer;
  this.hourlyResultsArray = [];
  this.totalSales = 0;
  getRandomCustomerSales(this);
  allShops.push(this);
}
//Prototype method to render data for the table

Shop.prototype.renderData = function () {
  var tableTr = addElement('tr', tableBody);
  addElement('td', tableTr, this.shopName);
  for (var i = 0; i < this.hourlyResultsArray.length; i++) {
    addElement('td', tableTr, this.hourlyResultsArray[i]);
  }
  addElement('td', tableTr, this.totalSales);
};

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

function addHeaderRow() {
  var tableTr = addElement('tr', thead);
  addElement('th', tableTr);
  for (var i = 0; i < hours.length; i++) {
    addElement('th', tableTr, hours[i]);
  }
  addElement('th', tableTr, 'Daily total');
}
// Added shops using constructor
new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

// Adding footer row
function addFooterRow() {
  //create tr for footer
  // create td elements 14 times + MEGA Total
  addElement('td', footerRow, 'Totals');
  // var megaTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var sumCities = 0;
    var megaTotal = 0;
    var td = document.createElement('td');
    footerRow.appendChild(td);
    for (var shop of allShops) {
      sumCities += shop.hourlyResultsArray[i];
    }
    td.textContent = sumCities;
  }
  var tdMega = document.createElement('td');
  footerRow.appendChild(tdMega);
  for (var shop2 of allShops) {
    megaTotal += shop2.totalSales;
  }
  tdMega.textContent = megaTotal;
}

function submitHandler(event) {
  event.preventDefault();
  var shop = new Shop(event.target.shopName.value, parseInt(event.target.minCustomers.value), parseInt(event.target.maxCustomers.value), parseFloat(event.target.averageCookiePerCustomer.value));
  // shop.push(this);
  shop.renderData(this);
  //handle updated footer row
  footerRow.innerHTML = '';
  addFooterRow();
  event.target.reset();
}
form.addEventListener('submit', submitHandler);

//Rending all rows
for (var shop of allShops) {
  shop.renderData();
}
addHeaderRow();
addFooterRow();



