document.getElementById('buscar').addEventListener('click', function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
        document.getElementById('informacoes-usuario').innerHTML = '<p>Por favor, insira um CEP válido.</p>';
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao buscar o CEP');
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                throw new Error('CEP inválido');
            }

            const userInfo = `
                <h2>Endereço Encontrado:</h2>
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
            document.getElementById('informacoes-usuario').innerHTML = userInfo;
        })
        .catch(error => {
            document.getElementById('informacoes-usuario').innerHTML = `<p>${error.message}</p>`;
        });
});
