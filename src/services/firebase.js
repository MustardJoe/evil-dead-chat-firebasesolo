var config = {
    apiKey: 'AIzaSyBGRZ5ISUNW_cpy-HGzVgn23hXYmYZHKao',
    authDomain: 'jon-project-chat.firebaseapp.com',
    databaseURL: 'https://jon-project-chat.firebaseio.com',
    projectId: 'jon-project-chat',
    storageBucket: 'jon-project-chat.appspot.com',
    messagingSenderId: '416109174858',
    appId: '1:416109174858:web:4a495ca8d81fb507'
};

// Initialize Firebase
export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const chatRoomsRef = db.ref('chatRooms');

window.db = db;