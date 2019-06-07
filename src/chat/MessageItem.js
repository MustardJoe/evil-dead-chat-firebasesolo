import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        return /*html*/`
            <li>
                <div class="user-message">
                    <span class="user">${message.name}: </span>
                    <span class="message">${message.message}</span>
                </div>
                <span class="date">${message.date}</span>
            </li>
        `;

    }
}

export default MessageItem;