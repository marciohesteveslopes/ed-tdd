const assert = require('assert');
const {soma, checaArray, checaObjeto} = require('../funcoes');
const {somar} = require('../soma')
const chai = require('chai')
const { expect } = require('chai');
const nock = require('nock')
const axios = require('axios')



describe('Teste do arquivo funcoes.js', () => {

    it('Soma de 1 + 1 deve retornar 2.', () => {
        assert.strictEqual(soma(1, 1), 2);
    });

    it('Soma de 1 + 1 não deve retornar 7.', () => {
        assert.notStrictEqual(soma(1, 1), 7);
    })

    it('O Elemento 3 está contido em [1,2,3,4,5].', () => {
        assert.strictEqual(checaArray([1,2,3,4,5], 3), 3)
    })

    it('O Elemento "TDD é Top" não está contido em [6,7,8,9].', () => {
        assert.notStrictEqual(checaArray([6,7,8,9], "TDD é top"), "TDD é top")
    })

    it('O objeto {attr1: 13} possui o atributo "attr1".', () => {
        assert.strictEqual(checaObjeto({attr1: 13}, 'attr1'), 'attr1')
    })

    it('O objeto {attr3: 13} não possui o atributo "attr1".', () => {
        assert.notStrictEqual(checaObjeto({attr3: 13}, 'attr1'), 'attr1')
    })

    describe('Checa se /([Invesstools])/ realiza match com as seguintes frases abaixo:', () => {
        let regex = /([Invesstools])/;

        it('"Não existe concorrente com a investtools para a melhor empresa para se estagiar."', () => {
            let frase = "Não existe concorrente com a investtools para a melhor empresa para se estagiar."
            assert.match(frase, regex , 'Não está contida na frase')
        })

        it('"Investtools cuida melhor dos seus estagiários que a bloomberg."', () => {
            let frase = "Investtools cuida melhor dos seus estagiários que a bloomberg."
            assert.match(frase, regex , 'Não está contida na frase')
        })

        it('"Somos parte do Programa de Formação da Investtools."', () => {
            let frase = "Somos parte do Programa de Formação da Investtools."
            assert.match(frase, regex , 'Não está contida na frase')
        })
    })

    describe('Checa as somas a seguir:', () => {

        it('1 + 1 deve retornar 2', () => {
            assert.strictEqual(somar(1, 1), 1 + 1)
        })

        it('2 + 2 deve retornar 4', () => {
            assert.strictEqual(somar(2, 2), 2 + 2)
        })

        it('4 + 5 deve retornar 9', () => {
            assert.strictEqual(somar(4, 5), 4 + 5)
        })

        it('6 + 7 deve retornar 13', () => {
            assert.strictEqual(somar(6, 7), 6 + 7)
        })

        it('9 + 9 deve retornar 18', () => {
            assert.strictEqual(somar(9, 9), 9 + 9)
        })
    })

    describe('Verifica se a página do Google:', function () {
        it('- contém a tag <body>', async function() {
            nock('https://google.com')
                .get('/')
                .reply(200, '<html><body></body></html>')

            let htmlBody;
            await axios.get('https://google.com/')
                .then(response => htmlBody = response.data)

            assert.match(htmlBody, /<body/)
        })
    })
});