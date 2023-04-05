document.getElementById('btn-calculate-triangle').addEventListener('click', function () {
    const triangleB = getValueFromInputField('alas');
    const triangleH = getValueFromInputField('tinggi');
    if (triangleB < 0 || triangleH < 0) {
        alert('Masukkan Angka.')
        return;
    }
    const triangleArea = (0.5 * triangleB * triangleH).toFixed(2);
    if (isNaN(triangleArea)) {
        alert('Error! NaN (Bukan Angka)');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Luas Segitiga</p>
                <p >Alas : ${triangleB}</p>
                <p >Tinggi :${triangleH}</p>
                <p >L = 1/2 X  ${triangleB} X ${triangleH}  : </p>
                <p class="mx-4">L = ${triangleArea}</p>
                </p>
            </div>
`;
    const ol = document.getElementById('hasil-luas-segitiga');
    ol.appendChild(li);
})

document.getElementById('btn-calculate-triangleb').addEventListener('click', function () {
    const triangleB = getValueFromInputField('sisia');
    const triangleH = getValueFromInputField('sisib');
    const triangleC = getValueFromInputField('sisic');
    if (triangleB < 0 || triangleH < 0 || triangleC < 0) {
        alert('Masukkan Angka.')
        return;
    }
    const triangleArea = (triangleB + triangleH + triangleC).toFixed(2);
    if (isNaN(triangleArea)) {
        alert('Error! NaN (Bukan Angka)');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Keliling Segitiga</p>
                <p >Sisi A : ${triangleB}</p>
                <p >Sisi B :${triangleH}</p>
                <p >Sisi C :${triangleC}</p>
                <p >K = ${triangleB} X  ${triangleH} X ${triangleC}  : </p>
                <p class="mx-4">K = ${triangleArea}</p>
                </p>
            </div>
`;
    const ol = document.getElementById('hasil-keliling-segitiga');
    ol.appendChild(li);
})