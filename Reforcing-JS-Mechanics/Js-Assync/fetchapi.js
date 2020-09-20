

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    console.log(el)

    if (tag === 'a') {
        e.preventDefault();//pra n ir pro link qd clico na pagina
        loadPage(el)
    }
})

async function loadPage(el) {

    try {
        const href = el.getAttribute('href')
        const response = await fetch(href)

        if (response.status != 200) throw new Error('Erro Doido')

        const html = await response.text()
        loadResult(html)
    } catch (error){ console.error(error)}
    
        // fetch(href) //carregando link
        //     .then(response => {
        //         if(response.status !=200) throw new Error('Erro Doido')
        //        return response.text()
        //     }) //pegando a resposta retornando outra promise com a response convertida pra text
        //     .then(html => {
        //         console.log(html)
        //         loadResult(html)})
        //     .catch(error => console.error(error))
}
function loadResult(response) {
    const result = document.querySelector('.resultado');
    result.innerHTML = response
}



//fetch por padrão retorna uma promise, n preciso criar 

// fetch('page1.html')
//     .then(response => { //n retorna de cara os dados e sim o html, dentro do then automaticamente retorna erro no cacth
//         if (response.status !== 200) throw new Error('Erro 404 made by us')
//         return response.text(); //aqui tbm retorna uma promise
//     }).then(html => console.log(html))
//     .catch(error => console.error(error))