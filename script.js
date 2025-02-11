// function createHearts() {
//     const heartsContainer = document.getElementById('hearts');
//     const heart = document.createElement('div');
//     heart.className = 'heart';
//     heart.innerHTML = '💖';
//     heart.style.left = Math.random() * 200 + '%';
//     heartsContainer.appendChild(heart);
    
//     setTimeout(() => heart.remove(), 4000);
// }

// // Crear corazones cada 300ms
// setInterval(createHearts, 300);

// // Efecto al hacer clic
// document.querySelector('.love-letter').addEventListener('click', () => {
//     alert("💝 ¡Eres el amor de mi vida! 💝");
// });



let noCount = 0;
const moveAmount = 150;

function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + '%';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 4000);
}

function showCard() {
    document.querySelector('.love-letter').style.animation = 'openEnvelope 1s forwards';
    setTimeout(() => {
        document.querySelector('.card-container').classList.add('show');
    }, 500);
}

function handleYes() {
    document.querySelector('.card-container').innerHTML = `
        <div class="valentine-card">
            <h2>¡Eres el mejor regalo! 🎁💝</h2>
            <p>¡Te espero a las 8pm! 🕗🌹</p>
            <div class="hearts"></div>
        </div>
    `;
}

function handleNo() {
    noCount++;
    const btnNo = document.getElementById('btnNo');
    btnNo.style.setProperty('--move', moveAmount * noCount);
    
    if(noCount > 3) {
        btnNo.textContent = "¡Segura? 😢";
    }
    if(noCount > 5) {
        btnNo.textContent = "Por favor 🙏";
    }
    if(noCount > 7) {
        btnNo.textContent = "¡Sí! 💖";
        btnNo.id = 'btnYes';
        btnNo.removeEventListener('click', handleNo);
        btnNo.addEventListener('click', handleYes);
    }
}

// Event Listeners
document.querySelector('.love-letter').addEventListener('click', showCard);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnYes').addEventListener('click', handleYes);
    document.getElementById('btnNo').addEventListener('click', handleNo);
});

// Heart animation
setInterval(createHearts, 300);