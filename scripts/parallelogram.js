function parallelogramArea() {
    const b = getValue('parallelogram-b');
    const h = getValue('parallelogram-h');
    const area = 0.5 * b * h;

    document.getElementById('parallelogram-area').innerText = area;

    const calc = document.createElement('p');
    calc.classList.add('text-3xl', 'mt-5');
    calc.innerHTML = 'Parallelogram Area: ' + area + 'cm<sup>2</sup>'
    document.getElementById('sidebar').append(calc);
}