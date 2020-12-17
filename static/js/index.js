import '../scss/style.scss';
import HomePage from 'pages/HomePage';

$(document).ready(() => {
  console.log('ShopyCode');

  let homePage = new HomePage();
  homePage.init();
});
