let counterValue = document.querySelector('#counter');

function increment(){
    let updateCounter = parseInt(counterValue.innerText);
    updateCounter = updateCounter + 1;
    counterValue.innerText = updateCounter;
}

function decrement(){
    let updateCounter = parseInt(counterValue.innerText);
    updateCounter = updateCounter - 1;
    counterValue.innerText = updateCounter;
}

function reset(){
    counterValue.innerText = 0;
}