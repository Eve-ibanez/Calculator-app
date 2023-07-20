function del() {
    var value = document.querySelector('.container__div-result__input').value;
    document.querySelector('.container__div-result__input').value=value.substr(0,value.length-1);
}

const body = document.querySelector ('body');
const btSwitch = document.querySelector ('.button-switch');
const equal = document.querySelector ('.equal');
const btDel = document.querySelector ('.del');
const reset = document.querySelector ('.reset');
const bkSwitch = document.querySelector ('.switch');
const bkCalc = document.querySelector ('.container__div-calc');
const bkResult = document.querySelector ('.container__div-result__input');
const bts = document.querySelectorAll ('.num');

const two = document.querySelector ('.two');
two.addEventListener ('click', ()=> {
    body.classList.add ('bk-active-1');
    btSwitch.classList.add ('bt-switch-active-1');
    btSwitch.style.left = '25px';
    equal.classList.add ('bt-active-1');
    btDel.classList.add ('bt-op-active-1');
    reset.classList.add ('bt-op-active-1')
    bkSwitch.classList.add ('bk-switch-calc-active-1');
    bkCalc.classList.add ('bk-switch-calc-active-1');
    bkResult.classList.add ('bk-result-active-1');
    
    body.classList.remove ('bk-active-2');
    btSwitch.classList.remove ('bt-switch-active-2');
    equal.classList.remove ('bt-active-2');
    btDel.classList.remove ('bt-op-active-2');
    reset.classList.remove ('bt-op-active-2');
    bkSwitch.classList.remove ('bk-switch-calc-active-2');
    bkCalc.classList.remove ('bk-switch-calc-active-2');
    bkResult.classList.remove ('bk-result-active-2');
})

const three = document.querySelector ('.three');
three.addEventListener ('click', ()=> {
    body.classList.add ('bk-active-2');
    btSwitch.classList.add ('bt-switch-active-2');
    btSwitch.style.left = '45px';
    equal.classList.add ('bt-active-2');
    btDel.classList.add ('bt-op-active-2');
    reset.classList.add ('bt-op-active-2');
    bkSwitch.classList.add ('bk-switch-calc-active-2');
    bkCalc.classList.add ('bk-switch-calc-active-2');
    bkResult.classList.add ('bk-result-active-2');

    body.classList.remove ('bk-active-1');
    btSwitch.classList.remove ('bt-switch-active-1');
    equal.classList.remove ('bt-active-1');
    btDel.classList.remove ('bt-op-active-1');
    reset.classList.remove ('bt-op-active-1')
    bkSwitch.classList.remove ('bk-switch-calc-active-1');
    bkCalc.classList.remove ('bk-switch-calc-active-1');
    bkResult.classList.remove ('bk-result-active-1');
})

const one = document.querySelector ('.one');
one.addEventListener ('click', ()=> {
    btSwitch.style.left = '10px';
    body.classList.remove ('bk-active-2');
    btSwitch.classList.remove ('bt-switch-active-2');
    equal.classList.remove ('bt-active-2');
    btDel.classList.remove ('bt-op-active-2');
    reset.classList.remove ('bt-op-active-2');
    bkSwitch.classList.remove ('bk-switch-calc-active-2');
    bkCalc.classList.remove ('bk-switch-calc-active-2');
    bkResult.classList.remove ('bk-result-active-2');

    body.classList.remove ('bk-active-1');
    btSwitch.classList.remove ('bt-switch-active-1');
    equal.classList.remove ('bt-active-1');
    btDel.classList.remove ('bt-op-active-1');
    reset.classList.remove ('bt-op-active-1')
    bkSwitch.classList.remove ('bk-switch-calc-active-1');
    bkCalc.classList.remove ('bk-switch-calc-active-1');
    bkResult.classList.remove ('bk-result-active-1');
})


