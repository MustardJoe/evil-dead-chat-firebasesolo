import Component from '../Component.js';
import { auth, chatRoomsRef } from '../services/firebase.js';

class ChatApp extends Component {
    render() { //render method from addChatRoom, will need to modify
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        const form = dom.querySelector('form');

        dom.addEventListener('submit', event => {
            event.preventDefault();
            // this generates a random key and assigns to returned ref
            const chatRoomRef = chatRoomsRef.push();

            chatRoomRef.set({
                key: chatRoomRef.key,
                owner: auth.currentUser.uid,
                name: input.value 
            }).then(() => {
                form.reset();
            });
           
        });




        return form;
    }

    renderTemplate() {
        return /*html*/`
            <div class="chat-room">
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