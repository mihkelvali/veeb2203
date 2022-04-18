let puuvili1 = {
    nimi: 'apelsin',
    liik: 'puuvili',
    varv: 'oranž',
    hinnang: 9,
    pilt: './assets/apelsin.jpeg'
}

let puuvili2 = {
    nimi: 'banaan',
    liik: 'puuvili',
    varv: 'kollane',
    hinnang: 7,
    pilt: './assets/banaan.jpeg'
}

let puuvili3 = {
    nimi: 'kiivi',
    liik: 'puuvili',
    varv: 'pruun',
    hinnang: 4,
    pilt: './assets/kiivi.jpeg'
}

let puuviljad = [puuvili1, puuvili2, puuvili3];

let sisuHTMLElement = document.getElementById('sisu');

for (let i = 0; i < puuviljad.length; i++) {
    sisuHTMLElement.innerHTML += '<div>' +
        '<h3>' + puuviljad[i].nimi + '</h3>' +
        '<div>hinnang: ' + puuviljad[i].hinnang + '</div>' +
        '<img src="' + puuviljad[i].pilt + '" width="150">' +
        '</div>';
}
