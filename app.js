'use strict'


var cookieInfo = {
  location: ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'],
  minCustomers: [23, 3, 11, 20, 2],
  maxCustomers: [65, 24, 38, 38, 16],
  avgCookiePerSale: [6.3, 1.2, 3.7, 2.3, 4.6],
  hoursOpen: ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', 'Total: '],
  seattle: [],
  tokyo: [],
  dubai: [],
  paris: [],
  lima: [],
  randomCustomersPerHour: function(minCustomers, maxCustomers){
    var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);

  }

};

// var seattle = {
//   location: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiePerSale: 6.3,
//   cookiesPerHour: [],
//   customersEachHour: null,
//   totalCookies: null,
  
//   numberOfCustomers: function(minCustomers, maxCustomers){
//     var randomNumber = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers);
//     this.customersEachHour = randomNumber;
  
//   },

// };
// for (i = 0; i < (cookieInfo.hoursOpen.length -1); i++){
//   seattle.numberOfCustomers(seattle.minCustomers, seattle.maxCustomers);
//   var seattleTotal = Math.round(seattle.customersEachHour*seattle.avgCookiePerSale);
//   seattle.totalCookies = (seattleTotal + seattle.totalCookies);
//   seattle.cookiesPerHour.push(cookieInfo.hoursOpen[i] + seattleTotal + ' Cookies')
// };
// seattle.cookiesPerHour.push(cookieInfo.hoursOpen[14] + seattle.totalCookies)
// console.log(seattle.cookiesPerHour);

// var tokyo = {
//   location: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiePerSale: 1.2,
//   cookiesPerHour: [],
//   customersEachHour: null,
//   totalCookies: null,
  
//   numberOfCustomers: function(minCustomers, maxCustomers){
//     var randomNumber = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers);
//     this.customersEachHour = randomNumber;
  
//   },

// };
// for (i = 0; i < (cookieInfo.hoursOpen.length -1); i++){
//   tokyo.numberOfCustomers(tokyo.minCustomers, tokyo.maxCustomers);
//   var tokyoTotal = Math.round(tokyo.customersEachHour*tokyo.avgCookiePerSale);
//   tokyo.totalCookies = (tokyoTotal + tokyo.totalCookies);
//   tokyo.cookiesPerHour.push(cookieInfo.hoursOpen[i] + tokyoTotal + ' Cookies')
// };
// tokyo.cookiesPerHour.push(cookieInfo.hoursOpen[14] + tokyo.totalCookies)
// console.log(tokyo.cookiesPerHour);

// var dubai = {
//   location: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiePerSale: 3.7,
//   cookiesPerHour: [],
//   customersEachHour: null,
//   totalCookies: null,
  
//   numberOfCustomers: function(minCustomers, maxCustomers){
//     var randomNumber = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers);
//     this.customersEachHour = randomNumber;
  
//   },

// };
// for (i = 0; i < (cookieInfo.hoursOpen.length -1); i++){
//   dubai.numberOfCustomers(dubai.minCustomers, dubai.maxCustomers);
//   var dubaiTotal = Math.round(dubai.customersEachHour*dubai.avgCookiePerSale);
//   dubai.totalCookies = (dubaiTotal + dubai.totalCookies);
//   dubai.cookiesPerHour.push(cookieInfo.hoursOpen[i] + dubaiTotal + ' Cookies')
// };
// dubai.cookiesPerHour.push(cookieInfo.hoursOpen[14] + dubai.totalCookies)
// console.log(dubai.cookiesPerHour);

// var paris = {
//   location: 'Paris',
//   minCustomers: 20,
//   maxCustomers:38,
//   avgCookiePerSale: 2.3,
//   cookiesPerHour: [],
//   customersEachHour: null,
//   totalCookies: null,
  
//   numberOfCustomers: function(minCustomers, maxCustomers){
//     var randomNumber = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers);
//     this.customersEachHour = randomNumber;
  
//   },

// };
// for (i = 0; i < (cookieInfo.hoursOpen.length -1); i++){
//   paris.numberOfCustomers(paris.minCustomers, paris.maxCustomers);
//   var parisTotal = Math.round(paris.customersEachHour*paris.avgCookiePerSale);
//   paris.totalCookies = (parisTotal + paris.totalCookies);
//   paris.cookiesPerHour.push(cookieInfo.hoursOpen[i] + parisTotal + ' Cookies')
// };
// paris.cookiesPerHour.push(cookieInfo.hoursOpen[14] + paris.totalCookies)
// console.log(paris.cookiesPerHour);

var lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerSale: 4.6,
  cookiesPerHour: [],
  customersEachHour: null,
  totalCookies: null,
  
  numberOfCustomers: function(minCustomers, maxCustomers){
    var randomNumber = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers);
    this.customersEachHour = randomNumber;
  
  },

};
for (var i = 0; i < (cookieInfo.hoursOpen.length -1); i++){
  lima.numberOfCustomers(lima.minCustomers, lima.maxCustomers);
  var limaTotal = Math.round(lima.customersEachHour*lima.avgCookiePerSale);
  lima.totalCookies = (limaTotal + lima.totalCookies);
  lima.cookiesPerHour.push(cookieInfo.hoursOpen[i] + limaTotal + ' Cookies')
};
lima.cookiesPerHour.push(cookieInfo.hoursOpen[14] + lima.totalCookies)
console.log(lima.cookiesPerHour);

var sectionElement = document.getElementById('shops');
var h2Element = document.createElement('h2');
sectionElement.appendChild(h2Element);
h2Element.textContent = lima.name;



// var sectionElement = document.getElementById('shops');
// var divOne = document.createElement('div');
// var h2One = document.createElement('ul');
// var ulOne = document.createElement('ul')
// h2One.textContent = lima.location;
// for (var i = 0; i < cookieInfo.hoursOpen.length; i++){
//   var liOne = document.createElement('li');
//   liOne.textContent = lima.cookiesPerHour[i];
//   ulOne.appendChild(liOne);
// }
// var liOne = document.createElement('li');
// liOne.textContent = lima.cookiesPerHour[lima.cookiesPerHour.length -1];
// ulOne.appendChild(liOne);
// divOne.appendChild(h2One);
// divOne.appendChild(ulOne);
// sectionElement.appendChild(divOne);

