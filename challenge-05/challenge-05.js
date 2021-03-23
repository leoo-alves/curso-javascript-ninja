/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var vetor = ['Leo', 2, true, 2.5, 'fim']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var retorno = function(arr){
  return (arr)
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retorno(vetor)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var retornoInd = function(arr, ind){
  return (arr[ind])
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetorDif = ['Sim', true, 2, null, []]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornoInd(vetorDif, 0)
retornoInd(vetorDif, 1)
retornoInd(vetorDif, 2)
retornoInd(vetorDif, 3)
retornoInd(vetorDif, 4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function(nome){
    var livros = {
        'Orgulho e Preconceito': {
            quantidadePaginas: 400,
            autor: 'Jane Austen',
            editora: 'Thomas Egerton'
        },
        'O Pequeno Príncipe':{
            quantidadePaginas: 93,
            autor: 'Antoine De Saint-Exupery',
            editora: 'Gallimard'
        },
        'Dom Casmurro':{
            quantidadePaginas: 210,
            autor: 'Machado de Assis',
            editora: 'Livraria Garnier'
        }
    }
    return (nome === undefined ? livros : livros[nome])
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'Dom Casmurro'
console.log(`O livro ${nomeLivro} tem ${book('Dom Casmurro').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${nomeLivro} é ${book(nomeLivro).autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${nomeLivro} foi publicado pela editora ${book(nomeLivro).editora}`)
