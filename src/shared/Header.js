import Component from '../Component.js';
import Profile from './Profile.js';
import { auth } from '../services/firebase.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();

        const profile = new Profile();
        dom.appendChild(profile.render());

        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Jon's Evil Dead Chat</h1>
            </header>
    `;
    }
}

export default Header;