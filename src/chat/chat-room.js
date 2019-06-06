import ChatApp from './ChatApp.js';


const root = document.getElementById('app');
const app = new ChatApp();
root.appendChild(app.render());