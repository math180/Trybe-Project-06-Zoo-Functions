const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes', () => {
    const acc = handlerElephants('count');
    const result = 4;
    expect(acc).toEqual(result);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    const acc = handlerElephants('names');
    const result = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(acc).toEqual(result);
  });
  it('Retorna a média de idade dos elefantes', () => {
    const acc = handlerElephants('averageAge');
    const result = 10.5;
    expect(acc).toEqual(result);
  });
  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    const acc = handlerElephants('location');
    const result = 'NW';
    expect(acc).toEqual(result);
  });
  it('Retorna a popularidade dos elefantes', () => {
    const acc = handlerElephants('populatity');
    const result = 5;
    expect(acc).toEqual(result);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const acc = handlerElephants('availability');
    const result = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(acc).toEqual(result);
  });
  it('Deve retornar undefined caso não seja passado nenhum parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Passando por argumento um objeto vazio ({}) deve retornar a string: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null.', () => {
    expect(handlerElephants('oI')).toEqual(null);
  });
});
