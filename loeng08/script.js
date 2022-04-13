let kasutajaNimi = '';
while (kasutajaNimi == '' || kasutajaNimi == null) {
    kasutajaNimi = prompt('Sisesta kasutajanimi');
}

let tervitus = 'Tere, <b>' + kasutajaNimi + '</b>!';
let tervitusElement = document.getElementById('tervitus');

if (kasutajaNimi.toLowerCase() == 'nipitiri') {
    tervitus = 'Tere sõber';
}

tervitusElement.innerHTML = tervitus;
