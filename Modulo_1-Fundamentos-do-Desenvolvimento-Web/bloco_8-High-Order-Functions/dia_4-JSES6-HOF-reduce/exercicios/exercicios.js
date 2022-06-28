// Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = (arr) => arr.reduce((acc, crr) => acc.concat(crr), [])

console.log(flatten(arrays));

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const reduceNames = (books) => {
    const allNames = books.reduce((acc, book) => `${acc}${book.author.name}, `, '')
    return `${allNames.substring(0, allNames.length - 2)}.`
}

console.log(reduceNames(books));

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = (books) => books.reduce((acc, book) => book.releaseYear - book.author.birthYear + acc, 0) / books.length;


console.log(averageAge(books));

// 🚀 4- Encontre o livro com o maior nome.

const longestNamedBook = (books) => books.reduce((acc, book) => {
    if (book.name.length > acc.name.length) { return book }
    return acc
})

console.log(longestNamedBook(books));

// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (names) => names.reduce((sum, name) => sum + name.split('').reduce((acc, letter) => (letter === 'a' || letter === 'A') ? acc + 1 : acc, 0), 0)

console.log(containsA(names));

// 🚀 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (students, grades) => students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((acc, crr) => acc + crr, 0) / grades[index].length,
}))

console.log(studentAverage(students, grades));