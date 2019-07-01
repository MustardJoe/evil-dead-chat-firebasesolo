import '../utils/check-auth.js';
import ChatApp from './ChatApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new ChatApp();
    root.appendChild(app.render());
});

// const app = new ChatApp();
// root.appendChild(app.render());