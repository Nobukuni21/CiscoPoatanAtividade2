function calcular(){
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const d = parseFloat(document.getElementById('d1').value);
    
    const k = 8.9875 * Math.pow(10, 9); 
    var forca = k * (Math.abs(q1 * q2)) / (d * d);

    document.getElementById('resultado').innerText = forca.toExponential(2);
}