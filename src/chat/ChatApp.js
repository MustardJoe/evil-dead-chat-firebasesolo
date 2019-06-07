import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth, chatRoomsRef, testtdata } from '../services/firebase.js';

class ChatApp extends Component {
    render() { //render method from addChatRoom, will need to modify
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        const form = dom.querySelector('form');

        const header = new Header();
        dom.prepend(header.render());

        dom.addEventListener('submit', event => {
            event.preventDefault();
            // this generates a random key and assigns to returned ref
            const chatRoomRef = chatRoomsRef.push();
            console.log(chatRoomRef);

            testtdata.on('value', snapshot => {
                // console.log(snapshot.val()),
                const testValue = snapshot.val();
                console.log(testValue);
                return testValue;
            });

            chatRoomRef.set({
                key: chatRoomRef.key,
                owner: auth.currentUser.uid,
                chat_msg: input.value, 
                // name: auth.currentUser.username
            }).then(() => {
                form.reset();
            });
           
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