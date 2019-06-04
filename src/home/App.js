import Component from '../Component.js';
import Header from '../shared/Header.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);


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