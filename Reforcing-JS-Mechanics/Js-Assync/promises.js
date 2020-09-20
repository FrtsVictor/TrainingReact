
function random(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}




//Resolve é o que será feito qd tiver retorno positivo
//then() toda vez q da certo é no then que executamos algo

//Reject é o que será feito qd  nao tiver retorno ou der erro
//Catch executado sempre que o reject for retornado

function perai(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg != 'string') {
                reject('Bayblade')//reject envia o erro pro catch pegar
                return //uso pra sair caso de erro , se n ele segue o resto do codigo
            }


            resolve(msg.toUpperCase() + '    Passei pela promise') //só posso passar um parametro, enviando aqui pego no then
        }, tempo)
    })
}


perai('Conexão BD', random(1, 2))
    .then(resposta => { //resposta = parametro que joguei no then pelo resolve
        console.log(resposta);
        return perai('buscando dados', random(1, 3));
    })
    .then((resp) => {
        console.log(resp);
        return perai('Tratando dados da base', random(1, 3));
    })
    .then((msg) => {
        console.log(msg);
        return msg; // n passe parametro ele pega o parametro do ultimo envio, no caso 'tratando dados'
    })
    .then((msg) => {
        console.log("Mensagem que veio do then  " + msg)
    })
    .then(() => {
        console.log('Doidera')
    })
    .then(() => {
        console.log('Doidera2')
        return perai('', random(1, 2))
    })
    .then(() => {
        console.log('Doidera3')
    })
    .catch((e) => {
        console.log(e)
    });


//Metodos uteis para uma promise
/*
*The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves
 * to an array of the results of the input promises. This returned promise will resolve when all of the input's
 * promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the
 * input promises rejecting or non-promises throwing an error, and will reject with this first rejection 
 * message / error. */


//SE UMA PROMISE CAI NO ERRO NENHUMA EXECUTA
const arrayPromises = [
    'valor 1',
    'valor 2',
    perai('Coleee 1', 3000),
    perai('Coleee 2', 2000),
    perai('Coleee 3', 1000),
    perai('', 5000),
    perai('Coleee 5', 900),
    'valor 99'
]

//Resolvendo todas as promises juntas e na ordem em que foram criadas
Promise.all(arrayPromises).then((resp) => {
    console.log(resp)
}).catch((e) => {
    console.log(e + ' Deu erro manin')
})


const arrayPromises2 = [
    perai('1 correndo muito', random(6, 8)),
    perai('2 correndo muito', random(6, 8)),
    perai('3 correndo muito', random(6, 8)),
    perai('4 correndo muito', random(6, 8)),
    perai(1, random(6, 8)),
]


//RETORNA O PRIMEIRO PROMISE RESOLVIDO, SOMENTE O PRIMEIRO
Promise.race(arrayPromises2)
    .then((resp) => {
        console.log(resp)
    })
    .catch(() => {
        console.log('Deu zinabre')
    })





function baixarPagina() {
    let emCache = false;

    if (emCache) { //Quando determinada condição é atingida o Promise.resolve traz a resposta direto
        return Promise.resolve('Página em cache')
    } else {
        return (perai('Baixei a pagina', 2000))
    }
}

baixarPagina()
    .then((msg) => {
        console.log(msg)
    })
    .catch((e) => {
        console.log(e)
    })