// 28 do 04

//testes 

//const professor = {
  //  nome: 'senac' ,
    //idade: 28,
    //email: 'senac@senac.com'

//}
//console.log(professor.nome, professor.idade)
//console.log('email: ' + professor.email)

//const bicicleta = {
  //  cor: 'azul',
    //marchas: 21,
    //estilo: 'espeed',
//}

//console.log(bicicleta["estilo"], bicicleta["marchas"])


//altetrar valores

//bicicleta.marchas = 18;
//console.log(bicicleta.marchas)


//exercicio 1

//crie um objeto que represente um filme. Ela deve ter dados da direção, o nome, o ano de lançamento,
//e uma lista que diga ce voçe ja viu ou não.

//const filme = {
  //empresa: 'disney' ,
  //dadosDaDirecao: 'cristina 29 anos , carolina 23 , bruno 45 ,' ,
  //nome: 'gatoDeBotas' ,
  //anoDeLançamento: '2007' ,
  //lista: 'já vi' ,



//}
//console.log(filme.empresa ,)
//console.log(filme.dadosDaDirecao ,)
//console.log(filme.nome ,)
//console.log(filme.anoDeLançamento ,)
//console.log(filme.lista

//exercicio 2


//A) crie um objeto que represente uma pessoa, Essa pessoa precisa ter nome, idade, genero musical preferido;

//B)acesse e imprima no console as propriedades desse objeto.


//const pessoa = {
  //nome: 'gabi' ,
  //idade: '16' ,
  //genero: 'pop'

//}
//console.log("o nome da pessoa é" , pessoa['nome'] , "ela tem" , pessoa['idade'] , "seu genero musical é" , pessoa['genero'])


//continuação objetos
//02/05

//ARRAY DE OBJETOS

//const professores = [
 // {nome: 'andrei' , modulo: 1} ,
 // {nome: 'vitor' , modulo: 2} ,
 // {nome: 'mina' , modulo: 3} ,

//]

//(teste)console.log(professores)

//(teste)console.log(professores[0])

//(verdadeiro) = console.log(professores[0].nome)//possição do array em que o objeto se encontra.

//const curso = {
  //nome: 'frontend' //STRING
  
//}

//adicionando atributos

//curso.numeroEstudante = 50;

//console.log(curso.nome)  //frontend
//console.log(curso.numeroEstudante)

//const Novofilme = {
  //personagens: [ 'os daumatas' , 'cruela' , 'cachorros' ],
  //empresa: 'disney' ,
  //nome: 'cruela' ,
  //anoDeLançamento: '2010' , 
  //lista: 'ss' ,
  //elenco: [ 'maria' , 'joao' , 'vitor'],  
//}

//Novofilme.personagens = [ 'os daumatas' , 'cruela' , 'cachorros'  ];
//console.log (Novofilme.elenco[0], "como" ,Novofilme.personagens[0] );
//console.log (Novofilme.elenco[1], "como" ,Novofilme.personagens[1] );
//console.log (Novofilme.elenco[2], "como" ,Novofilme.personagens[2] );
//Novofilme.elenco[0] = 'xuxa';
//console.log(Novofilme.elenco[0] = 'xuxa');

//arrays e oobjetos

//const usario = {
  //nome: 'emily' ,
  //idade: 16,
  //email: '@emilygabi' ,
  //cidade: 'são léo',
  //marcas: ['dell' , 'lg' , 'nokia',]
//} 

//troca de nome

 //const usarionovo = {
  //...usario ,
  //nome: 'gabi'

 //}
 //console.log(usarionovo)


 //exercicio-4)
 //crie uma função que receba um objeto de pessoa (exercicio 2) e crie um novo
 //objeto mantendo as propriedades originais e acrescentando:

 //A)uma propriedade com a lista de suas comidas favoritas
 //B)uma propriedade que seja um objeto , com o nome e idade para
 //representar o melhor amigo da pessoa 

 const usarioTeste = {
  nome: 'emily' ,
  idade: 16,
  email: '@emilygabi' ,
  cidade: 'são léo',
 }

novoUsario(usarioTeste)
function novoUsario(pessoa) {
  const pessoaNova = {
    ...pessoa ,s
  }


}


 const novapessoa = {

  comidaFav: ['arroz' , 'feijao' , 'ovo' , 'batataDoce'],
  amigo: {nome: 'maria' , idade: '16'},
 }
 console.log(`o nome da pessoa é ${teste.nome} e suas comidas favs sao ${teste.comidaFav[0]} e ${teste.comidaFav[1]} `)

 