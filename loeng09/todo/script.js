const sisuElement = document.getElementById('sisu');

function valjastaYlesanne(ylesanne, jarjekorraNumber) {
    return `
    <div>
        <div>
            ${jarjekorraNumber + 1}: ${ylesanne}
        </div>
    </div>`;
}

const ylesanded = [
    'Pese hambad',
    'Võimle',
    'Söö hommikust'
]

for (let i = 0; i < ylesanded.length; i++) {
    sisuElement.innerHTML += valjastaYlesanne(ylesanded[i], i);
}
