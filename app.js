const express = require('express');
const app = express();

app.use(express.static('public'));
const fs = require('fs');

const homepage = fs
  .readFileSync('./public/pages/homepage/homepage.html')
  .toString();

const week1 = fs.readFileSync('./public/pages/week1/week1.html').toString();

const week2 = fs.readFileSync('./public/pages/week2/week2.html').toString();

const week3 = fs.readFileSync('./public/pages/week3/week3.html').toString();

const week4 = fs.readFileSync('./public/pages/week4/week4.html').toString();

const nav = fs.readFileSync('./public/components/nav/nav.html').toString();
const footer = fs
  .readFileSync('./public/components/footer/footer.html')
  .toString();

let frontPage =
  nav.replace('%%TITLE_PLACEHOLDER%%', 'Welcome page') + homepage + footer;
let weekOnePage = nav + week1 + footer;
let weekTwoPage = nav + week2 + footer;
let weekThreePage = nav + week3 + footer;
let weekFourPage = nav + week4 + footer;

var tab = '';

app.get('/', (req, res) => {
  frontPage = nav.replace('%%ACTIVE_HOME%%', 'active') + homepage + footer;
  res.send(frontPage);
});

app.get('/weekOne', (req, res) => {
  weekOnePage = nav.replace('%%ACTIVE_WEEK1%%', 'active') + week1 + footer;
  res.send(weekOnePage);
});

app.get('/weekTwo', (req, res) => {
  weekTwoPage = nav.replace('%%ACTIVE_WEEK2%%', 'active') + week2 + footer;
  res.send(weekTwoPage);
});
app.get('/weekThree', (req, res) => {
  weekThreePage = nav.replace('%%ACTIVE_WEEK3%%', 'active') + week3 + footer;
  res.send(weekThreePage);
});
app.get('/weekFour', (req, res) => {
  weekFourPage = nav.replace('%%ACTIVE_WEEK4%%', 'active') + week4 + footer;
  res.send(weekFourPage);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`The app is running on the port ${PORT}`);
});
