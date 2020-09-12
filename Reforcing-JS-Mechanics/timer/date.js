const data1 = new Date(0);// Wed Dec 31 1969
const data2 = new Date('2020-04-20 20:20:56');
const data3 = new Date(2018, 11, 24, 10, 33);
const data4 = new Date(2018, 11, 24, 10);

const data = new Date();

console.log(
    data1.toString(),
    'date ' + data1.getDate(),
    'fullYear ' + data1.getFullYear(),
    'minutes ' + data1.getMinutes(),
    'month ' + data1.getMonth()
)


function formatarData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/ Horario: ${hora}:${min}:${seg}`
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

let dataFormatada = formatarData(data);
console.log(dataFormatada)


