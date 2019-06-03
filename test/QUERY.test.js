import QUERY from '../src/QUERY.js';
const test = QUnit.test;

QUnit.module('Query String Parser');

test('converts query string to object', assert => {
    // arrange
    const query = 'search=shiny&page=1'; 
    const expected = {
        search: 'shiny',
        page: '1'
    };

    // act
    const queryProps = QUERY.parse(query);

    // assert
    assert.deepEqual(queryProps, expected);
});

test('converts object to query string', assert => {
    const queryProps = {
        search: 'shiny',
        page: '1'
    };

    const expected = 'search=shiny&page=1'; 
    
    // act
    const query = QUERY.stringify(queryProps);

    // assert
    assert.deepEqual(query, expected);
});