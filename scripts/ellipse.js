function ellipseArea() {
    const a = getValue('ellipse-a');
    const b = getValue('ellipse-b');
    const area = Math.PI * a * b;

    document.getElementById('ellipse-area').innerText = area;

    const calc = document.createElement('p');
    calc.classList.add('text-3xl', 'mt-5');
    calc.innerHTML = 'Ellipse Area: ' + area + 'cm<sup>2</sup>'
    document.getElementById('sidebar').append(calc);
}