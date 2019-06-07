import Component from '../Component.js';
import Header from '../shared/Header.js';
import QUERY from '../QUERY.js';
import { auth, chatRoomsRef, chatMsgsByRoomRef } from '../services/firebase.js';

class ChatApp extends Component {
    render() { //render method from addChatRoom, will need to modify
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        const form = dom.querySelector('form');

        const header = new Header();
        dom.prepend(header.render());

        const searchParams = QUERY.parse(window.location.search.slice(1));
        const chatRoomRef = chatRoomsRef.child(searchParams.key);
        const roomMessagesRef = chatMsgsByRoomRef.child(searchParams.key);
        

        // dom.addEventListener('submit', event => {  //probably don't need any of this crap
        //     event.preventDefault();
        //     // this generates a random key and assigns to returned ref
        //     const chatRoomRef = chatRoomsRef.push();
        //     console.log(chatRoomRef);

        //     testtdata.on('value', snapshot => {
        //         // console.log(snapshot.val()),
        //         const testValue = snapshot.val();
        //         console.log(testValue);
        //         return testValue;
        //     });
        // });

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
        
        chatRoomRef.set({
            key: chatRoomRef.key,
            owner: auth.currentUser.uid,
            chat_msg: input.value, 
            // name: auth.currentUser.username
        }).then(() => {
            form.reset();
        });



        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="chat-room">
                <a href="./">Home</a>
                <div class="chat-content">
                    
                </div>
                <div class="chat-input">
                    <form>
                        <input class="text-input" type="text">
                        <button>Send</button>
                    </form>
                </div>
            </div>
    `;
    }
}

export default ChatApp;