
let x = '';
let y = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','×','÷','%', '+/-'];

const out = document.querySelector('.calc-screen p')

function clearAll() {
    x = '';
    y = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    clr.innerHTML = 'AC';
}

document.querySelector('.ac').onclick = clearAll;
let clr = document.querySelector('.ac');



document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    //нажата кнопка clearALL
    if(event.target.classList.contains('ac')) return;

    out.textContent= '';
    //получает нажатую кнопку
    const key = event.target.textContent;
    //нажата ли цифра 0-9
    if(digit.includes(key)) {
        if (y ==='' && sign ==='') {
        //если y пустой то наполнятся x
        x += key;
        console.log(x, y, sign);
        //изменение AC на С при нажатии на цифру
        clr.innerHTML = 'C';
        //вывод строки в цифрах на экран
        out.textContent = x
        }

        //если значение x & y не пустое  
        else if (x!=='' && y!=='' && finish) {
            //обнуляем y и finish
            y = key;
            finish = false;
            //и выводим y
            out.textContent = y
        }

        //после чего наполняется y и выводится еще один ответ
        else {
            y += key
            out.textContent = y
        }

        if(sign!=='', y!==''){console.log(x, sign, y );}
        return;
    }

    //если нажата клавиша знака
    if(action.includes(key)) {
        sign = key;
        console.log(sign);
        out.textContent = sign;

        return;
    }

    

    //если нажата равно =
    //if который передает переменную y переменной x при том что x и sign были нажаты (x!=='' && sign!=='')
    if (y==='') y = x;
        if (key === '=') {
            switch (sign) {
                case '+':
                    x = (+x) + (+y);
                    break;

                case '-':
                    x = x - y;
                    break;

                case '×':
                    x = x * y;
                    break;

                
                //функция с процентами которая реализованая умножением x на 0.1
                case '%':
                    x = x / 100;
                    break;

                case '÷':
                    //ошибка при делении на нуль
                    if (y === '0') {
                        out.textContent ='Error';
                        x = '';
                        y = '';
                        sign = '';
                        return;
                    }
                    x = x / y;
                    break;

                    case '+/-':
                        if(y==='', x!==''){x = -x}
            }
            finish = true
            out.textContent = x;
            console.log(x, sign, y)
    }


   
}





// const ownname = ' Leonid'
// const surname = ' Khan'
// const whoMade = 'Made by'
// const when = ' 15.10.23'

// const author = (whoMade + '' + surname + '' + ownname + when)

// function showTime() {
//     console.log(author)
//     alert(author)
// }

// setTimeout(showTime, 5000)

// const copyright = "© Without Copyright"

// function ccopyright() {
//     console.log(copyright)
//     alert(copyright)
// }

// setTimeout(ccopyright, 7000)
