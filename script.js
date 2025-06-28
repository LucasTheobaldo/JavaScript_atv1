alert('Atividade cauculo de média!');

let quntidade;
let nota;
let media = 0;
quntidade = parseInt(prompt('Quantas notas você quer inserir?'));
for (i = 0; i < quntidade; i++) {
    nota = parseFloat(prompt('Digite a ' + (i + 1) + 'nota: '));
    media += nota;
}
alert('Média: ' + (media / tamanho).toFixed(2));
