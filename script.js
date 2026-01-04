const personagens = [
    { nome: "Scorpion", força: 95, agilidade: 88, magia: 90, cor: "#ff8c00" },
    { nome: "Sub-Zero", força: 92, agilidade: 85, magia: 94, cor: "#00bfff" },
    { nome: "Raiden", força: 90, agilidade: 80, magia: 98, cor: "#fff" },
    { nome: "Liu Kang", força: 94, agilidade: 95, magia: 85, cor: "#ff0000" },
    { nome: "Kitana", força: 85, agilidade: 92, magia: 88, cor: "#1e90ff" }
];

function distribuirCartas() {
    const deckElement = document.getElementById('deck');
    deckElement.innerHTML = ''; // Limpa o deck

    // Sorteia um personagem aleatório
    const p = personagens[Math.floor(Math.random() * personagens.length)];

    const cardHTML = `
        <div class="card">
            <div class="card-image" style="color: ${p.cor}">?</div>
            <div class="card-name">${p.nome}</div>
            <div class="stats">
                <p>Força: ${p.força}</p>
                <p>Agilidade: ${p.agilidade}</p>
                <p>Magia: ${p.magia}</p>
            </div>
        </div>
    `;
    
    deckElement.innerHTML = cardHTML;
}