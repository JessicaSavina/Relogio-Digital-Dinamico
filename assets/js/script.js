const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {

    let minhaData = new Date();
    let hr = minhaData.getHours();
    let min = minhaData.getMinutes();
    let seg = minhaData.getSeconds();



    if (hr < 10)
        hr = '0' + hr;

    if (min < 10)
        min = '0' + min;

    if (seg < 10)
        seg = '0' + seg;



    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;


})
