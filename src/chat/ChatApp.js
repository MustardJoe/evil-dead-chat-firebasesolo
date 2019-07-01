import Component from '../Component.js';
import Header from '../shared/Header.js';
import QUERY from '../QUERY.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';

import { chatRoomsRef, chatMsgsByRoomRef } from '../services/firebase.js';

class ChatApp extends Component {

    render() { 
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.prepend(header.render());

        const searchParams = QUERY.parse(window.location.search.slice(1));
        const chatRoomRef = chatRoomsRef.child(searchParams.key);
        const roomMessagesRef = chatMsgsByRoomRef.child(searchParams.key);
        
        roomMessagesRef 
            .on('value', snapshot => {
                const value = snapshot.val();
                const messages = value ? Object.values(value) : [];
                messageList.update({ messages: messages });
            });
        
        chatRoomRef
            .on('value', snapshot => {
                const value = snapshot.val();
                header.update({ title: value.name });       
                
            });
        
        const messageInput = new MessageInput({ 
            roomMessagesRef,
            key: searchParams.key      
        });
          
        main.appendChild(messageInput.render());
        
        const messageList = new MessageList({ messages: [] });
        main.appendChild(messageList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="chat-room">
                <div class="home-bar">
                    <a class="home-link" href="./">Home</a>
                </div>
                <main class="chat-content"></main>
            </div>
    `;
    }
}

export default ChatApp;