document.addEventListener('DOMContentLoaded', function () {
    let counter = 0;
    const counterText = document.getElementById('counterText');
    const counterSpan = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');


    incrementButton.addEventListener('click', function () {
        counter++;
        counterSpan.innerText = counter;
        updateCounterText();
    });
    decrementButton.addEventListener('click', function () {
        if (counter > 0) {
            counter--;
            counterSpan.innerText = counter;
            updateCounterText();
        }
    });
    resetButton.addEventListener('click', function () {
        counter = 0;
        counterSpan.innerText = counter;
        updateCounterText();
    });


    function updateCounterText() {
        counterText.innerHTML = `Çalışmaya başladığınızdan beri telefonunuz <span id="counter">${counter}</span> kere dikkatinizi dağıttı`;
    }
});
