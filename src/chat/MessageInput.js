import Component from '../Component.js';
import { auth, chatMsgsByRoomRef } from '../services/firebase.js';

class MessageInput extends Component {
    render() {
        const form = this.renderDOM();

        const key = this.props.key;
        
        const messagesRef = chatMsgsByRoomRef.child(key);

        const input = form.querySelector('input');

        const avatar = auth.currentUser.photoURL || './assets/default-avatar.jpg';
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const messages = messagesRef.push();
            
            messages.set({
                owner: auth.currentUser.uid,
                message: input.value,
                name: auth.currentUser.displayName,
                photo: avatar,
                date: Date()
            });

            form.reset();
            input.focus();
            form.blur();
        });

        
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="chat-input">
                <input name="text-input">
                <button class="input-button"> 
                    ⏎ 
                </button>
            </form> 
        `;
    }
}

export default MessageInput;
