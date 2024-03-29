function rhombusArea() {
    const d1 = getValue('rhombus-d1');
    const d2 = getValue('rhombus-d2');
    const area = 0.5 * d1 * d2;

    document.getElementById('rhombus-area').innerText = area;

    const calc = document.createElement('p');
    calc.classList.add('text-xl', 'mt-5');
    calc.innerHTML = "<p class='font-semibold'>Rhombus Area:</p> " + area + 'cm<sup>2</sup>'
    document.getElementById('sidebar').append(calc);
}