const length = require('./length.js');


test('si se le pasa a la funcion la cadena hola debe retornar 4 ', () =>{
    expect(length('hola')).toBe(4);
})
test('si se le pasa a la funcion la cadena javascript debe retornar 10', () =>{
    expect(length('javascript')).toBe(10);
})
test('si se le pasa a la funcion la cadena colombia debe retornar 8 ', () =>{
    expect(length('colombia')).toBe(8);
})
test('si se le pasa a la funcion la cadena numero debe retornar 6', () =>{
    expect(length('numero')).toBe(6);
})
test('si se le pasa a la funcion la cadena martes debe retornar 6 ', () =>{
    expect(length('martes')).toBe(6);
})