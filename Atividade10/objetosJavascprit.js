function criarObjetos(){
var aluno1 = new Object();
aluno1.ra = "0030482113034";
aluno1.nome = "Julia Cortizo Gomes";

var aluno2 = {
    ra: "0030482113034",
    nome: "Julia Cortizo Gomes"
}

var aluno3 = {};
var prop_ra = 'ra';
var prop_nome = 'nome';
aluno3[prop_ra] = '0030482113034';
aluno3[prop_nome] = 'Julia Cortizo Gomes';

alert("Nome aluno 1: " + aluno1.nome + "RA: " + aluno1.ra);
alert("Nome aluno 2: " + aluno2.nome + "RA: " + aluno2.ra);
alert("Nome aluno 3: " + aluno3.nome + "RA: " + aluno3.ra);
}