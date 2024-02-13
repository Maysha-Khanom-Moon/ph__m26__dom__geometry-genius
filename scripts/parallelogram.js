function parallelogramArea() {
    const b = getValue('parallelogram-b');
    const h = getValue('parallelogram-h');
    const area = 0.5 * b * h;

    document.getElementById('parallelogram-area').innerText = area;

    const calc = document.createElement('p');
    calc.classList.add('text-xl', 'mt-5');
    calc.innerHTML = "<p class='font-semibold'>Parallelogram Area:</p> " + area + 'cm<sup>2</sup>'
    document.getElementById('sidebar').append(calc);
}