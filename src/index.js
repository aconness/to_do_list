
import _ from 'lodash';
import './style.css';

console.log("test");

const contentDiv = document.querySelector('.content');
const testH1 = document.createElement("h1");
testH1.textContent = 'hello';
contentDiv.appendChild(testH1);