
const request = obj => {
    //xhr xml http request = padrao
    const xhr = new XMLHttpRequest(); //construtor
    //         verbo http, url , true/false se é assincrono ou n, sempre true
    xhr.open(obj.method, obj.url, true)//tras uma callback
    xhr.send();//branco pq n to enviando nd
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.sucess(xhr.responseText);
        } else {
            obj.error({
                code: xhr.status, //numero status do erro
                msg: xhr.statusText // msg do erro
            })
        }
    })
}


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    console.log(el)

    if (tag === 'a') {
        e.preventDefault();//pra n ir pro link qd clico na pagina
        loadPage(el)
    }
})

function loadPage(el) {
    const href = el.getAttribute('href')
    console.log(href)

    const objRequest = {
        method: 'GET',
        url: href,
        sucess(response) {
            loadResult(response);
        },
        error(errorText) {
            console.log(errorText)
        }
    }
    
    request(objRequest)
}
    function loadResult(response) {
        const result = document.querySelector('.resultado');
        result.innerHTML = response
    }