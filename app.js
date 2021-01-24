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
  this.cookiesPerHour.push(this.totalCookies);
  console.log(this.cookiesPerHour);
};

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
function tableFootPrint(footerR){
  for (var i = 0; i < hoursOpen.length; i++){
    dummyHourlyTotal = 0;
    for (var j = 0; j < stores.length; j++){
      dummyHourlyTotal += stores[j].cookiesPerHour[i];
      totalOfTotals += stores[j].cookiesPerHour[i];
    };
    var tdFoot = document.createElement('td');
      tdFoot.textContent = dummyHourlyTotal;
      footerR.appendChild(tdFoot);
  };
};

function printToTable(city){
  var tableElement = document.getElementById('table'); //hey javascript heres where the table is
  var tableHeader = document.createElement('th'); //make a table header
  tableHeader.textContent = city.location; //heres what the text content of the table header is
  var tableRow = document.createElement('tr');//make a new table row
  var tableBody = document.createElement('tbody');
  tableElement.appendChild(tableBody);
  tableBody.appendChild(tableRow);
  tableRow.appendChild(tableHeader);
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

tableFootPrint(totalsLeftFoot);

var formElement = document.getElementById('store-form');

formElement.addEventListener('submit', function (event){
  event.preventDefault();
  console.log(event.target.location.value);
  console.log(event.target.minCustPerHour.value);
  console.log(event.target.maxCustPerHour.value);
  console.log(event.target.avgCookPerSale.value);

  var location = event.target.location.value;
  var minCustPerHour = parseInt(event.target.minCustPerHour.value);
  var maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
  var avgCookPerSale = parseInt(event.target.avgCookPerSale.value);

  locationIndex.push(location);
  minCustomersIndex.push(minCustPerHour);
  maxCustomersIndex.push(maxCustPerHour);
  avgCookiePerSaleIndex.push(avgCookPerSale);

  console.log(avgCookiePerSaleIndex);
  var storeFromEvent = new Store(locationIndex[5], minCustomersIndex[5], maxCustomersIndex[5], avgCookiePerSaleIndex[5]);

  stores.push(storeFromEvent);
  console.log(stores);
  storeFromEvent.calculateTotalCookies();
  printCityInfo(storeFromEvent);
  printToTable(storeFromEvent);
  
  tableFootThatStaysPut.removeChild(tableFootThatStaysPut.childNodes[0]);
  var newTotalsLeft = document.createElement('tr');
  newTotalsLeft.textContent = 'totals'
  tableFootThatStaysPut.appendChild(newTotalsLeft);
  tableFootPrint(newTotalsLeft);
});
