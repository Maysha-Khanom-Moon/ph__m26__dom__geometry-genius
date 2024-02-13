/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * 
 * step -1: get the base
 */

function triangleArea() {
    // base
    const base = document.getElementById('triangle-base').value;
    // height
    const height = document.getElementById('triangle-height').value;
    // area
    const area = 0.5 * parseFloat(base) * parseFloat(height);
    
    // display
    document.getElementById('area').innerText = area;

    // show at the sidebar
    // create an element
    const calc = document.createElement('p');
    calc.innerHTML = "Area: " + area + "cm<sup>2</sup>";
    // 3 ways to set attributes
    calc.style.marginTop = '40px';
    calc.classList.add('text-3xl');
    // calc.setAttribute('style', 'font-weight: bold')

    // append
    document.getElementById('sidebar').append(calc);
}