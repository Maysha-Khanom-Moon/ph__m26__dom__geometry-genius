function pentagonArea() {
    const p = getValue('pentagon-p');
    const b = getValue('pentagon-b');
    const area = 0.5 * p * b;

    document.getElementById('pentagon-area').innerText = area;

    const calc = document.createElement('p');
    calc.classList.add('text-xl', 'mt-5');
    calc.innerHTML = "<p class='font-semibold'>Pentagon Area:</p> " + area + 'cm<sup>2</sup>'
    document.getElementById('sidebar').append(calc);
}