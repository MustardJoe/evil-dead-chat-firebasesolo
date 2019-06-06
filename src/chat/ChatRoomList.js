import Component from '../Component.js';
import ChatRoomItem from '../shared/ChatRoomItem.js';
import { chatRoomsRef } from '../services/firebase.js';

class ChatRoomList extends Component {
    render() {
        const dom = this.renderDOM();
        const chatRooms = this.props.chatRooms;

        chatRooms.forEach(chatRoom => {
            const chatRoomItem = new ChatRoomItem({ chatRoom });
            dom.appendChild(chatRoomItem.render());
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/`
        <ul>
        </ul>    
    `;
    }
}

export default ChatRoomList;