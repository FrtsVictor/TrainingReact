
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true)
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status, //numero status do erro
                    msg: xhr.statusText // msg do erro
                })
            }
        })
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

async function loadPage(el) {
    const href = el.getAttribute('href')
    console.log(href)
    
    const objRequest = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(objRequest)
        loadResult(response)
    } catch{ (error => console.log(error))
    }

    // request(objRequest).then(response=>{
    //     loadResult(response)
    // }).catch(error => console.log(error))
}
function loadResult(response) {
    const result = document.querySelector('.resultado');
    result.innerHTML = response
}