const botao = document.getElementById('botao');
const catImages = document.getElementById('catImages');
botao.addEventListener('click', fetchCatImages);

function fetchCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=1')
        .then(response => {
            if (!response.ok) {
                throw new Error ('A solicitação foi bem-sucedida');
            }
            return response.json
        })
        .then(data => {
            catImages.innerHTML = '';
            data.forEach(cat =>{
                const catImage = document.createElement('img');
                catImage.src = cat.url;
                catImage.alt = 'imagem de gato';
                catImage.appendChild(catImage);
            });
        })

    .catch(error => {
        console.error('Erro: ',error);
    });
}