import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancio = cancion;
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancio}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                const { lyrics } = resultado;
                UI.divResultado.textContent = lyrics;
                UI.headingResultado.textContent = `Letra de la cancion: ${this.cancio} de ${this.artista}`;
            })
    }
}

export default API;