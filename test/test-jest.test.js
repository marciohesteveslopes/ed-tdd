const {soma, checaArray, checaObjeto} = require('../funcoes');
const {somar} = require('../soma')
const nock = require('nock')
const axios = require('axios')

describe('Teste do arquivo funcoes.js', () => {
    
    test('Espera que a soma de 1 + 1 seja igual a 2', () => {
        expect(soma(1, 1)).toBe(2);
    })
    
    test('Espera que a soma de 1 + 1 não seja igual a 7', () => {
        expect(soma(1, 1)).not.toBe(7)
    })

    test('O Elemento 3 está contido em [1,2,3,4,5].', () => {
        expect(checaArray([1,2,3,4,5], 3)).toBe(3)
    })

    test('O Elemento "TDD é Top" não está contido em [6,7,8,9].', () => {
        expect(checaArray([6,7,8,9], "TDD é top")).not.toBe("TDD é top")
    })

    test('O objeto {attr1: 13} possui o atributo "attr1".', () => {
        expect(checaObjeto({attr1: 13}, 'attr1')).toBe('attr1')
    })

    test('O objeto {attr3: 13} não possui o atributo "attr1".', () => {
        expect(checaObjeto({attr3: 13}, 'attr1')).not.toBe('attr1')
    })

    describe('Checa se /([Invesstools])/ realiza match com as seguintes frases abaixo:', () => {
        let regex = /([Invesstools])/;

        test('"Não existe concorrente com a investtools para a melhor empresa para se estagiar."', () => {
            let frase = "Não existe concorrente com a investtools para a melhor empresa para se estagiar."
            expect(frase).toMatch(regex)
        })

        test('"Investtools cuida melhor dos seus estagiários que a bloomberg."', () => {
            let frase = "Investtools cuida melhor dos seus estagiários que a bloomberg."
            expect(frase).toMatch(regex)
        })

        test('"Somos parte do Programa de Formação da Investtools."', () => {
            let frase = "Somos parte do Programa de Formação da Investtools."
            expect(frase).toMatch(regex)
        })
    })

    describe('Checa as somas a seguir:', () => {

        test('1 + 1 deve retornar 2', () => {
            expect(somar(1, 1)).toBe(1 + 1)
        })

        test('2 + 2 deve retornar 4', () => {
            expect(somar(2, 2)).toBe(2 + 2)
        })

        test('4 + 5 deve retornar 9', () => {
            expect(somar(4, 5)).toBe(4 + 5)
        })

        test('6 + 7 deve retornar 13', () => {
            expect(somar(6, 7)).toBe(6 + 7)
        })

        test('9 + 9 deve retornar 18', () => {
            expect(somar(9, 9)).toBe(9 + 9)
        })
    })

    describe('Verifica se a página do Google:', function () {
        it('- contém a tag <body>', async function() {
            nock('https://google.com')
                .get('/')
                .reply(200, "<html><body></body></html>")

            let htmlBody;
            await axios.get('https://google.com/')
                .then(response => htmlBody = response.data)

            expect(htmlBody).toMatch(/<body/)
        })
    })
})