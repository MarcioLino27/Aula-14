document.getElementById('fetch-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) throw new Error('Usuário não encontrado');
            return response.json();
        })
        .then(data => {
            const userInfo = `
                <h2>${data.name}</h2>
                <img src="${data.avatar_url}" alt="${data.name}">
                <p>${data.bio || 'Sem biografia'}</p>
            `;
            document.getElementById('user-info').innerHTML = userInfo;
        })
        .catch(error => {
            document.getElementById('user-info').innerHTML = `<p>${error.message}</p>`;
        });
});