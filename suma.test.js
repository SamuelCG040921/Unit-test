const sum = require('./suma');

test('si se suma 5 y 5 debe retornar 10', () =>{
    expect(sum(5,5)).toBe(10);
})
test('si se suma 20 y 21 debe retornar 41', () =>{
    expect(sum(20,21)).toBe(50);
})
test('si se suma 30 y 35 debe retornar 65', () =>{
    expect(sum(30,35)).toBe(65);
})
test('si se suma 50 y 50 debe retornar 100', () =>{
    expect(sum(50,50)).toBe(100);
})
test('si se suma 1000 y 1000 debe retornar 2000', () =>{
    expect(sum(1000,1000)).toBe(2000);
})