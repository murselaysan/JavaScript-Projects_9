const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];


//for Loop
for(let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}


//forEach
companies.forEach(function(company) {
  console.log(company.name);
});

companies[companies.length] = {name: "Company Ten", category: "Retail", start: 1981, end: 1991}
companies.push({name: "Company Eleven", category: "Technology", start: 1991, end: 2001});

console.log(companies);

// Filter

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// Get 80s companies

//const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

//const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));


// map

//Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// console.log(companyNames);

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap)


// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//  const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies)


// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

//const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
//console.log(totalYears)
