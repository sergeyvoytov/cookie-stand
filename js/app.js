// problem domain: create web application to calculate hour averages for the shop
// TODO: dynamically generate sales data

'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//max hourly customers
//average cookies per customer
//method generating a random number and customers 
//array with results
//display value of array in <ul>
// calculate the sum of these hourly totals

function getRandomCustomer(shop) {
  for (var i = 0; i < hours.length; i++) {
    var customerCount = Math.floor(Math.random() * (shop.maxCustomers - shop.minCustomers + 1)) + shop.minCustomers;
    var cookieSales = Math.ceil(shop.averageCookiePerCustomer * customerCount);
    shop.hourlyResultsArray.push(cookieSales);
    shop.totalSales += cookieSales;
  }
}

var seattle = {
  name: 'seattle',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookiePerCustomer: 6.3,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    getRandomCustomer(this);
  },
};
seattle.generateHourlySales();
console.log('output', seattle.hourlyResultsArray);
console.log('Seattle total', seattle.totalSales);



var tokyo = {
  name: 'tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  averageCookiePerCustomer: 1.2,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    getRandomCustomer(this);
  },
};
tokyo.generateHourlySales();
console.log('output', tokyo.hourlyResultsArray);
console.log('Tokyo total', tokyo.totalSales);

var dubai = {
  name: 'dubai',
  minCustomers: 11,
  maxCustomers: 38,
  averageCookiePerCustomer: 3.7,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    getRandomCustomer(this);
  },
};
dubai.generateHourlySales();
console.log('output', dubai.hourlyResultsArray);
console.log('Dubai total', dubai.totalSales);

var paris = {
  name: 'paris',
  minCustomers: 20,
  maxCustomers: 38,
  averageCookiePerCustomer: 2.3,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    getRandomCustomer(this);
  },
};
paris.generateHourlySales();
console.log('output', paris.hourlyResultsArray);
console.log('Paris total', paris.totalSales);

var lima = {
  name: 'lima',
  minCustomers: 2,
  maxCustomers: 16,
  averageCookiePerCustomer: 4.6,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    getRandomCustomer(this);
  },
};
lima.generateHourlySales();
console.log('output', lima.hourlyResultsArray);
console.log('Lima total', lima.totalSales);

