import Component from '../Component.js';

class ChatRoomItem extends Component {
    render() {
        const dom = this.renderDOM();

        // const chatRoom = this.props.chatRoom();

        return dom;
    }

    renderTemplate() {
        const chatRoom = this.props.chatRoom;
        return /*html*/`
            <li>
                <div>Here is a chat room ${chatRoom.name}</div>
            </li>

    `;
    }
}

export default ChatRoomItem;