import "./styles.css";

const homeButton = document.createElement('button');
homeButton.textContent = 'HOME';

const menuButton = document.createElement('button');
menuButton.textContent = 'MENU';

const aboutButton = document.createElement('button');
aboutButton.textContent = 'ABOUT';

const navbar = document.querySelector('nav');
navbar.appendChild(homeButton);
navbar.appendChild(menuButton);
navbar.appendChild(aboutButton);



