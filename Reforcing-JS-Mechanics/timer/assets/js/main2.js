let h3 = document.querySelector('.timer')

let btnStart = document.querySelector('.start')
let btnStop = document.querySelector('.stop')
let btnClear = document.querySelector('.clear')

let sec = 0;
let timer;

//document.addEventListener('click' , ((e)=>console.log(e.target)))

function initiateTimer(){
    h3.classList.remove('stopped')
    timer = setInterval(()=>{
        sec++
        h3.textContent = createCronometer(sec)
    }, 1000)
}

function createCronometer(seconds){
    const data = new Date(seconds * 1000)

    return data.toLocaleTimeString('pt-br', {
        hour12:false,
        timeZone: 'UTC'
    })
}

document.addEventListener('click' , 
    ((e)=>{
        const element =  e.target

        if(element.classList.contains('start')){
            clearInterval(timer)
            initiateTimer()
        }
        
        if(element.classList.contains('stop')){
            h3.classList.add('stopped')
            clearInterval(timer)
        }        
        
        if(element.classList.contains('clear')){
            h3.textContent = '00:00:00'    
            h3.classList.remove('stopped')
            sec = 0
        }
    })

)










