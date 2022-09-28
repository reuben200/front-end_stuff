let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('#button'));


buttons.map(button =>{
    button.addEventListener('click', (e)=>{

        // let result = display.value;
        switch(e.target.innerText){
            case 'AC':
                display.value = '';
                break;
            case '←':
                display.value = display.value.slice(0, -1);
                break; 
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Oops, Error!';
                }
                break;
            default:
                display.value += e.target.innerText;
        };

    });
});
