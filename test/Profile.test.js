import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('profile component test');

test('', assert => {
    //arrange
    const user = {
        displayName: 'Static Name',
        photoURL: '../assets/default-avatar.jpg',
    };

    const profile = new Profile({ user });

    const expected = /*html*/`
        <div class="profile">
            <img src="../assets/default-avatar.jpg">
            <span>Static Name</span>
            <button>Sign Out</button>
        </div>
    `;
    //act
    const result = profile.renderTemplate();

    //assert
    assert.htmlEqual(result, expected);
});