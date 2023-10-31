const rest = require('./resta.js');

test('si se resta 3 y 3 debe retornar 0', () =>{
    expect(rest(3,3)).toBe(0);
})
test('si se resta 5 y 3 debe retornar 2', () =>{
    expect(rest(5,3)).toBe(2);
})
test('si se resta 3 y 10 debe retornar -7', () =>{
    expect(rest(3,10)).toBe(-7);
})
test('si se resta 2 y 20 debe retornar -18', () =>{
    expect(rest(2,20)).toBe(-18);
})
test('si se resta 7 y 2 debe retornar 0', () =>{
    expect(rest(7,2)).toBe(5);
})