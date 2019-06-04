import Component from '../Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Jon's Evil Dead Chat</h1>
            </header>
    `;
    }
}

export default Header;