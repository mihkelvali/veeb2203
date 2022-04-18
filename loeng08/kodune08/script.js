let sisuHTMLElement = document.getElementById('sisu');
let nimi = '';

while (nimi == '' || nimi == null) {
    nimi = prompt('Sisesta palun oma nimi.');
}

if (nimi.length < 6) {
    sisuHTMLElement.innerHTML = '<h1 style="color: blue;">Küll sul on ilus lühike nimi</h1><img src="../../loeng04/dog.jpeg">'
} else if (nimi.length == 6) {
    sisuHTMLElement.innerHTML = '<h1 style="color: blue;">Pikkus on 6</h1><img src="../../loeng04/dog.jpeg">'
} else if (nimi.length == 7) {
    sisuHTMLElement.innerHTML = '<h1 style="color: blue;">Pikkus on 7</h1><img src="../../loeng04/dog.jpeg">'
} else {
    sisuHTMLElement.innerHTML = '<h1>Küll sul on suurepärane pikk nimi</h1><img src="../../loeng04/varjupaik.png">'
}
