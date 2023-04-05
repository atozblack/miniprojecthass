document.getElementById('btn-calculate-parallelogram').addEventListener('click', function () {
    const parallelogramB = getValueFromInputField('alasj');
    const parallelogramH = getValueFromInputField('tinggij');
    if (parallelogramB < 0 || parallelogramH < 0) {
        alert('Masukkan angka.')
        return;
    }
    const parallelogramArea = (parallelogramB * parallelogramH).toFixed(2);
    if (isNaN(parallelogramArea)) {
        alert('Error! NaN (Bukan Angka)');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
            <div>
                <p>Keliling Jajar Genjang</p>
                <p>Alas : ${parallelogramB}</p>
                <p>Tinggi :${parallelogramH}</p>
                <p>L = ${parallelogramB} X ${parallelogramH} : </p>
                <p class="mx-4">L = ${parallelogramArea}</p>
            </div>
`;
    const ol = document.getElementById('hasil-luas-jajar');
    ol.appendChild(li);
    
})


document.getElementById('btn-calculate-parallelogramkj').addEventListener('click', function () {
    const parallelogramB2 = getValueFromInputField('alaskj');
    const parallelogramH2 = getValueFromInputField('sisimiring');
    if (parallelogramB2 < 0 || parallelogramH2 < 0) {
        alert('Masukkan angka.')
        return;
    }
    const parallelogramAreaJ = (2 * (parallelogramB2 + parallelogramH2)).toFixed(2);
    if (isNaN(parallelogramAreaJ)) {
        alert('Error! NaN (Bukan Angka)');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
            <div>
                <p>Keliling Jajar Genjang</p>
                <p>Alas : ${parallelogramB2}</p>
                <p>Sisi Miring :${parallelogramH2}</p>
                <p>K = 2 X ( ${parallelogramB2} + ${parallelogramH2} ) : </p>
                <p>K = ${parallelogramAreaJ}</p>
            </div>
`;
    const ol = document.getElementById('hasil-keliling-jajar');
    ol.appendChild(li);
})
