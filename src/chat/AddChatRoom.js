import Component from '../Component.js';
import { auth, chatRoomsRef, chatMsgsByRoomRef } from '../services/firebase.js';

class AddChatRoom extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            // this generates a random key and assigns to returned ref
            const chatRoomRef = chatRoomsRef.push();

            chatMsgsByRoomRef.set({
                
            });

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
            <form class="add-chat-room">
                <input placeholder="to add">
                <button>Add Chat Room</button>
            </form>
            
    `;
    }
}

export default AddChatRoom;