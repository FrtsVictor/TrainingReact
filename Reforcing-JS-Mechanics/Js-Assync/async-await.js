
function random() {
    min = 0;
    max = 5000;
    return Math.floor(Math.random() * (max - min) + min)
}

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


// perai('Fase1', random(0, 3))
//     .then(valor => {
//         console.log(valor)
//         return perai('Fase 2', random())
//     })
//     .then(fase => {
//         console.log(fase);
//         return perai('Fase 3' , random())
//     })
//     .then(fase => console.log(fase))
//     .catch(e=>console.log(e))

//sem assync n chama o await
async function executa() {
    try {
        const fase1 =  perai('Fase 1 ', 1000)
        console.log(fase1)

        setTimeout(()=>
        console.log('Estava pendente, not more ', fase1),1500)

        const fase2 = await perai('Fase 2 ', random())
        console.log(fase2)

        const fase3 = await perai('fase 3', random())
        console.log(fase3)

        const fase4 = await perai('Fase 4 ', random())
        console.log(fase4)
        console.log('End')
    } catch (e) {
        console.log(e)
    }
}
executa()

//prmises tem 3 estados
//Pending - ainda n tem valor
//Fullfiled
//Rejected