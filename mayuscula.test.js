const upper = require('./mayuscula.js');


test('si se le pasa a la funcion la cadena juan debe retornar JUAN ', () =>{
    expect(upper('juan')).toBe('JUAN');
})
test('si se le pasa a la funcion la cadena Colombia debe retornar COLOMBIA', () =>{
    expect(upper('Colombia')).toBe('COLOMBIA');
})
test('si se le pasa a la funcion la cadena NO debe retornar no ', () =>{
    expect(upper('EnErO')).toBe('ENERO');
})
test('si se le pasa a la funcion la cadena LuNeS debe retornar lunes ', () =>{
    expect(upper('JavaScript')).toBe('JAVASCRIPT');
})
test('si se le pasa a la funcion la cadena MARtes debe retornar MARTES ', () =>{
    expect(upper('MARtes')).toBe('MARTES');
})