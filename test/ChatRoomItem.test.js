import ChatRoomItem from '../src/shared/ChatRoomItem.js';

const test = QUnit.test;

QUnit.module('chat room item test')

test('chat room list render chat room item', assert => {
    //arrange
    const chatRoom = {
        name: 'First Chat room',
    };


    const expected = /*html*/`
        <li>
            <div>Here is a chat room ${chatRoom.name}</div>
        </li>

    `;
    //act
    const result = new ChatRoomItem({ chatRoom });


    //assert
    assert.htmlEqual(result, expected)
});