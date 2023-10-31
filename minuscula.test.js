const lower = require('./minuscula.js');


test('si se le pasa a la funcion la cadena HOLA debe retornar hola ', () =>{
    expect(lower('HOLA')).toBe('hola');
})
test('si se le pasa a la funcion la cadena si debe retornar si', () =>{
    expect(lower('si')).toBe('si');
})
test('si se le pasa a la funcion la cadena NO debe retornar no ', () =>{
    expect(lower('NO')).toBe('no');
})
test('si se le pasa a la funcion la cadena LuNeS debe retornar lunes ', () =>{
    expect(lower('LuNeS')).toBe('lunes');
})
test('si se le pasa a la funcion la cadena Luis debe retornar luis ', () =>{
    expect(lower('Luis')).toBe('luis');
})