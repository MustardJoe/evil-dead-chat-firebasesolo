import Component from '../Component.js';
import { chatRoomsRef } from '../services/firebase.js';

class ChatRoomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const chatRoom = this.props.chatRoom;
        const button = dom.querySelector('button');

        button.addEventListener('click', () => {
            chatRoomsRef.child(chatRoom.key).remove();
        });

        return dom;
    }

    renderTemplate() {
        const chatRoom = this.props.chatRoom;
        // const isOwner = auth.currentUser.uid === chatRoom.owner;
        // const button = isOwner ? '<button>Delete</button>' : ''; stretch goal
        
        return /*html*/`
            <li class="chatlist-item">
                <div><a href="./chat.html?key=${chatRoom.key}">Here is a chat room ${chatRoom.name}</a></div>
                <button>Delete Room</button>
            </li>

    `;
    }
}

export default ChatRoomItem;