const uudised = [
    {
        pildiAsukoht: 'pildid/mannid.jpeg',
        pealkiri: 'Uudis 1',
        lyhikokkuvote: '111 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium iaculis augue a ultricies. Aenean at sodales leo. Donec fermentum neque eros, eget congue nunc lobortis quis.',
        viide: 'uudis1.html',
    },
    {
        pildiAsukoht: 'pildid/raba.jpeg',
        pealkiri: 'Uudis 2',
        lyhikokkuvote: '222 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium iaculis augue a ultricies. Aenean at sodales leo. Donec fermentum neque eros, eget congue nunc lobortis quis.',
        viide: 'uudis2.html',
    },
    {
        pildiAsukoht: 'pildid/virmalised.jpg',
        pealkiri: 'Uudis 3',
        lyhikokkuvote: '333 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium iaculis augue a ultricies. Aenean at sodales leo. Donec fermentum neque eros, eget congue nunc lobortis quis.',
        viide: 'uudis3.html',
    },
]

const uudisedElement = document.getElementById('uudised');

for (let i = 0; i < uudised.length; i++) {
    uudisedElement.innerHTML += `
        <div class="uudis">
            <img src="${uudised[i].pildiAsukoht}" width="250" height="150" />
            <h3 class="pealkiri">${uudised[i].pealkiri}</h3>
            <div class="kokkuvote">${uudised[i].lyhikokkuvote}</div>
            <a href="${uudised[i].viide}">Loe edasi</a>
        </div>
    `;
}
