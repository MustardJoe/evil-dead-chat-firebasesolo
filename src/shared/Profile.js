import Component from '../Component.js';

class Profile extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="profile">
                <img src="./assets/default-avatar.png">
                <span>Static Name</span>
                <button>Sign Out</button>
            </div>
    `;
    }
}

export default Profile;