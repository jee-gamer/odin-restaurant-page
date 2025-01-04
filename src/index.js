import "./styles.css";
import show_home from "./home.js";
import show_about from "./about.js";
import show_menu from "./menu.js";
import home from "./home.js";

const content_div = document.querySelector('#content');

const homeButton = document.createElement('button');
homeButton.textContent = 'HOME';
homeButton.addEventListener('click', clear_content);
homeButton.addEventListener('click', show_home);

const menuButton = document.createElement('button');
menuButton.textContent = 'MENU';

const aboutButton = document.createElement('button');
aboutButton.textContent = 'ABOUT';

let buttonList = [homeButton, menuButton, aboutButton];

function clear_content(){
    content_div.replaceChildren();
}

const navbar = document.querySelector('nav');
for (let button of buttonList){
    navbar.appendChild(button);
}



