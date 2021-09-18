const functions = require('./functions');

// EQUAL

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// NOT EQUAL

test('Adds 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// NULL
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// FALSY
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// USER
// test('User should be Cristiano Ronaldo', () => {
//     expect(functions.createUser()).toEqual({
//         firstName: 'Cristiano',
//         lastName: 'Ronaldo'
//     });
// });

// LESS TAHN AND GREATER THAN
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// REGEX
test('There is no I in the team', () => {
    expect('team').not.toMatch(/I/); // FOR NOT TO PASS  i + (/I/i) 
})

// ARRAYS
test('Admin should be in usernames', () =>{
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// ASYNC DATA
test('User fetch Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
      .then(data => {
          expect(data.name).toEqual('Leanne Graham');
      })
})

// PROMISE
test('User fetch Leanne Graham', async () => {
    expect.assertions(1);
      const data = await functions.fetchUser();
          expect(data.name).toEqual('Leanne Graham');
})
