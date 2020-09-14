//traning factory function

function createCalculator(){
    return{
        display: document.querySelector('.display'),

    

        
        start(){
            console.log('helo');
            this.clickButton();
        },

        clearDisplay(){
            this.display.value= '';
        },
        clickButton(){
            //this -> calc
            document.addEventListener('click', e =>{
                //here the this reffers to document
                const ele = e.target;

                if(ele.classList.contains('btn-num')){
                    //document q chama entao o this = document
                    this.btnStopDisplay(ele.innerText);
                }

                if(ele.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

            }) //all functions have your own method, bind says to my function the This is refferenced to my calc, not document
        } ,   //using this on arrow function it'll ever be refferenced for who called or created the function calc

        btnStopDisplay(value){
            this.display.value += value;
        }
        
    }
}

const calc = createCalculator()

calc.start()