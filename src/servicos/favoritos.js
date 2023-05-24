import axios from 'axios';

const livrosFavoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getLivrosFavoritos() {
    const response = await livrosFavoritosAPI.get('/');

    return response.data;
}

async function postFavorito(id) {
    await livrosFavoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
    await livrosFavoritosAPI.delete(`/${id}`);
}

export {
    getLivrosFavoritos,
    postFavorito,
    deleteFavorito,
}