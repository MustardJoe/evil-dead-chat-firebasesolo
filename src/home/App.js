import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddChatRoom from '../chat/AddChatRoom.js';
import ChatRoomList from '../chat/ChatRoomList.js';
import { chatRoomsRef } from '../services/firebase.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);
        
        const addChatRoom = new AddChatRoom();
        dom.appendChild(addChatRoom.render());
        
        const chatRoomList = new ChatRoomList({ chatRooms: [] });
        dom.appendChild(chatRoomList.render());

        chatRoomsRef.on('value', snapshot => {
            // console.log(snapshot.val()),
            const value = snapshot.val();
            const chatRooms = value ? Object.values(value) : [];
            chatRoomList.update({ chatRooms });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <main>
            </main>
    `;
    }
}

export default App;