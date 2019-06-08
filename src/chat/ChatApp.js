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
        
        // chatRoomRef.set({      //this code breaks app, from when input form was located in this comp
        //     key: chatRoomRef.key,
        //     owner: auth.currentUser.uid,
        //     chat_msg: input.value, 
        //     // name: auth.currentUser.username
        // }).then(() => {
        //     form.reset();
        // });
        
        main.appendChild(messageInput.render());
        
        const messageList = new MessageList({ messages: [] });
        main.appendChild(messageList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="chat-room">
                <main class="chat-content">
                    <a href="./">Home</a>
                </main>
            </div>
    `;
    }
}

export default ChatApp;