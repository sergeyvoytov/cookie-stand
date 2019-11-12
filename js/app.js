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
//DOM for Seattle
var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = seattle.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < seattle.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + seattle.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${seattle.totalSales} cookies`;
ul.appendChild(totalLi);


//DOM for Tokyo

var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = tokyo.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < tokyo.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + tokyo.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${tokyo.totalSales} cookies`;
ul.appendChild(totalLi);

//Dubai

var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = dubai.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < dubai.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + dubai.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${dubai.totalSales} cookies`;
ul.appendChild(totalLi);

//Paris

var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = paris.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < paris.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + paris.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${paris.totalSales} cookies`;
ul.appendChild(totalLi);

//Lima

var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = lima.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < lima.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + lima.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${lima.totalSales} cookies`;
ul.appendChild(totalLi);