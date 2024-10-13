document.getElementById('buscar').addEventListener('click', () => {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const pokemonInfo = document.getElementById('pokemonInfo');

    if (!pokemonInput) {
        pokemonInfo.innerHTML = '<p>Por favor, insira um nome ou número de Pokémon.</p>';
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(data => {
            const { name, id, abilities, height, weight, sprites } = data;
            pokemonInfo.innerHTML = `
                <h2>${name.charAt(0).toUpperCase() + name.slice(1)} (ID: ${id})</h2>
                <img src="${sprites.front_default}" alt="${name}">
                <p><strong>Altura:</strong> ${height / 10} m</p>
                <p><strong>Peso:</strong> ${weight / 10} kg</p>
                <p><strong>Habilidades:</strong> ${abilities.map(a => a.ability.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            pokemonInfo.innerHTML = `<p>${error.message}</p>`;
        });
});
