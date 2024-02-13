function rectangleArea() {
    const width = document.getElementById('rectanlge-width').value;
    const length = document.getElementById('rectangle-length').value;

    const area = parseFloat(width) * parseFloat(length);

    document.getElementById('rectangle-area').innerText = area;

    const calc = document.createElement('p');
    calc.classList.add('text-3xl', 'mt-5');
    calc.innerHTML = 'Rectangle Area: ' + area + 'cm<sup>2</sup>'
    document.getElementById('sidebar').append(calc);
}