'use strict'
var locationIndex = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
var minCustomersIndex = [23, 3, 11, 20, 2];
var maxCustomersIndex = [65, 24, 38, 38, 16];
var avgCookiePerSaleIndex = [6.3, 1.2, 3.7, 2.3, 4.6];
var hoursOpen = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', 'Daily Location Total: '];


function Store(location, minCustomers, maxCustomers, avgCookiePerSale){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = avgCookiePerSale;
  this.cookiesPerHour = [];
  this.customersEachHour = null;
  this.totalCookies = null;
};

Store.prototype.randomCustomersPerHour = function(){
  var randomNumber = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers);
  this.customersEachHour = randomNumber;
};

Store.prototype.calculateTotalCookies = function(){
  for (var i = 0; i < (hoursOpen.length -1); i++){
    this.randomCustomersPerHour(this.minCustomers, this.maxCustomers);
    var cityTotal = Math.round(this.customersEachHour*this.avgCookiePerSale);
    this.totalCookies = (cityTotal + this.totalCookies);
    this.cookiesPerHour.push(cityTotal)
  };
  this.cookiesPerHour.push(this.totalCookies)
  console.log(this.cookiesPerHour);
};

//this function prints city info as a list under the section element
function printCityInfo(city){
  var sectionElement = document.getElementById('shops');
  var h2Element = document.createElement('h2');
  sectionElement.appendChild(h2Element);
  h2Element.textContent = city.location;

  var ulOne = document.createElement('ul');
  h2Element.appendChild(ulOne)
  for (var i = 0; i < city.cookiesPerHour.length; i ++){
    var liOne = document.createElement('li');
    liOne.textContent = city.cookiesPerHour[i];
    ulOne.appendChild(liOne);
  };
};



// this makes all the headers for time of day. they should be to the left of the blank spot in the upper left hand corner
var tableElement = document.getElementById('table');
var tableHeadThatStaysPut = document.createElement('thead');
var blankLeftHead = document.createElement('th');
blankLeftHead.textContent = ' '
tableElement.appendChild(tableHeadThatStaysPut);
var tableRowForHeaders = document.createElement('tr');
tableRowForHeaders.appendChild(blankLeftHead);
tableHeadThatStaysPut.appendChild(tableRowForHeaders);
for (var i = 0; i < hoursOpen.length; i ++){
  var timeOfDayHeaders = document.createElement('th');
  tableRowForHeaders.appendChild(timeOfDayHeaders);
  timeOfDayHeaders.textContent = hoursOpen[i];
};

var tableFootThatStaysPut = document.createElement('tfoot');
var totalsLeftFoot = document.createElement('tr');
var footerTotals = document.createElement('td');
footerTotals.textContent = 'Totals'
totalsLeftFoot.appendChild(footerTotals);

// totalsLeftFoot.textContent = 'Totals';
tableElement.appendChild(tableFootThatStaysPut);
tableFootThatStaysPut.appendChild(totalsLeftFoot);

var hourlyTotalPerStore = [];
var dummyHourlyTotal = 0;
var totalOfTotals = 0;
function tableFootPrint(){
  for (var i = 0; i < hoursOpen.length; i++){
    dummyHourlyTotal = 0;
    for (var j = 0; j < stores.length; j++){
      dummyHourlyTotal += stores[j].cookiesPerHour[i];
      totalOfTotals += stores[j].cookiesPerHour[i];
    };
    var tdFoot = document.createElement('td');
      tdFoot.textContent = dummyHourlyTotal;
      totalsLeftFoot.appendChild(tdFoot);
  }
  
}


//this function prints city info as a row in the table
function printToTable(city){
  var tableElement = document.getElementById('table'); //hey javascript heres where the table is
  var tableHeader = document.createElement('th'); //make a table header
  tableHeader.textContent = city.location; //heres what the text content of the table header is
  var tableRow = document.createElement('tr');//make a new table row
  var tableBody = document.createElement('tbody');
  tableElement.appendChild(tableBody)
  tableBody.appendChild(tableRow);
  tableRow.appendChild(tableHeader)
   for (var i = 0; i < city.cookiesPerHour.length; i ++){  //take each index in the cookies per hour array and cycle through it
     var tdOne = document.createElement('td'); //each time you cycle through, make a new table data element
     tdOne.textContent = city.cookiesPerHour[i]; //make the text content of that data element equal to whatever index position the loop is on in the cookies per hour of the selected city
     tableRow.appendChild(tdOne); //put the new table data into the row
   };
};

// make each city show up now
var seattle = new Store(locationIndex[0], minCustomersIndex[0], maxCustomersIndex[0], avgCookiePerSaleIndex[0]); //make seattle
seattle.calculateTotalCookies(); //call the last function to make it populate
printCityInfo(seattle);
printToTable(seattle);

var tokyo = new Store(locationIndex[1], minCustomersIndex[1], maxCustomersIndex[1], avgCookiePerSaleIndex[1]);
tokyo.calculateTotalCookies();
printCityInfo(tokyo);
printToTable(tokyo);

var dubai = new Store(locationIndex[2], minCustomersIndex[2], maxCustomersIndex[2], avgCookiePerSaleIndex[2]);
dubai.calculateTotalCookies();
printCityInfo(dubai);
printToTable(dubai);

var paris = new Store(locationIndex[3], minCustomersIndex[3], maxCustomersIndex[3], avgCookiePerSaleIndex[3]);
paris.calculateTotalCookies();
printCityInfo(paris);
printToTable(paris);

var lima = new Store(locationIndex[4], minCustomersIndex[4], maxCustomersIndex[4], avgCookiePerSaleIndex[4]);
lima.calculateTotalCookies();
printCityInfo(lima);
printToTable(lima);

var stores = [seattle, tokyo, dubai, paris, lima];

// hourlyTotals();
tableFootPrint();

// var cookieInfo = {
//   location: ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'],
//   minCustomers: [23, 3, 11, 20, 2],
//   maxCustomers: [65, 24, 38, 38, 16],
//   avgCookiePerSale: [6.3, 1.2, 3.7, 2.3, 4.6],
//   hoursOpen: ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', 'Total: '],
//   seattle: [],
//   tokyo: [],
//   dubai: [],
//   paris: [],
//   lima: [],
//   randomCustomersPerHour: function(minCustomers, maxCustomers){
//     var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);

//   }

// };

// var seattle = {
//   location: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiePerSale: 6.3,
//   cookiesPerHour: [],
//   customersEachHour: null,
//   totalCookies: null,
  
//   numberOfCustomers: function(minCustomers, maxCustomers){
    // var randomNumber = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers);
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

// var sectionElement = document.getElementById('shops');
// var h2Element = document.createElement('h2');
// sectionElement.appendChild(h2Element);
// h2Element.textContent = seattle.location;

// var ulOne = document.createElement('ul');
// h2Element.appendChild(ulOne)
// for (var i = 0; i < seattle.cookiesPerHour.length; i ++){
//   var liOne = document.createElement('li');
//   liOne.textContent = seattle.cookiesPerHour[i];
//   ulOne.appendChild(liOne);
// };

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

// var sectionElement = document.getElementById('shops');
// var h2Element = document.createElement('h2');
// sectionElement.appendChild(h2Element);
// h2Element.textContent = tokyo.location;

// var ulOne = document.createElement('ul');
// h2Element.appendChild(ulOne)
// for (var i = 0; i < tokyo.cookiesPerHour.length; i ++){
//   var liOne = document.createElement('li');
//   liOne.textContent = tokyo.cookiesPerHour[i];
//   ulOne.appendChild(liOne);
// };

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

// var sectionElement = document.getElementById('shops');
// var h2Element = document.createElement('h2');
// sectionElement.appendChild(h2Element);
// h2Element.textContent = dubai.location;

// var ulOne = document.createElement('ul');
// h2Element.appendChild(ulOne)
// for (var i = 0; i < dubai.cookiesPerHour.length; i ++){
//   var liOne = document.createElement('li');
//   liOne.textContent = dubai.cookiesPerHour[i];
//   ulOne.appendChild(liOne);
// };

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

// var sectionElement = document.getElementById('shops');
// var h2Element = document.createElement('h2');
// sectionElement.appendChild(h2Element);
// h2Element.textContent = paris.location;

// var ulOne = document.createElement('ul');
// h2Element.appendChild(ulOne)
// for (var i = 0; i < paris.cookiesPerHour.length; i ++){
//   var liOne = document.createElement('li');
//   liOne.textContent = paris.cookiesPerHour[i];
//   ulOne.appendChild(liOne);
// };

// var lima = {
//   location: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiePerSale: 4.6,
//   cookiesPerHour: [],
//   customersEachHour: null,
//   totalCookies: null,
  
//   numberOfCustomers: function(minCustomers, maxCustomers){
//     var randomNumber = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers);
//     this.customersEachHour = randomNumber;
  
//   },

// };
// for (var i = 0; i < (cookieInfo.hoursOpen.length -1); i++){
//   lima.numberOfCustomers(lima.minCustomers, lima.maxCustomers);
//   var limaTotal = Math.round(lima.customersEachHour*lima.avgCookiePerSale);
//   lima.totalCookies = (limaTotal + lima.totalCookies);
//   lima.cookiesPerHour.push(cookieInfo.hoursOpen[i] + limaTotal + ' Cookies')
// };
// lima.cookiesPerHour.push(cookieInfo.hoursOpen[14] + lima.totalCookies)
// console.log(lima.cookiesPerHour);

// // turn the below line of code into a function
// var sectionElement = document.getElementById('shops');
// var h2Element = document.createElement('h2');
// sectionElement.appendChild(h2Element);
// h2Element.textContent = lima.location;

// var ulOne = document.createElement('ul');
// h2Element.appendChild(ulOne)
// for (var i = 0; i < lima.cookiesPerHour.length; i ++){
//   var liOne = document.createElement('li');
//   liOne.textContent = lima.cookiesPerHour[i];
//   ulOne.appendChild(liOne);
// };
