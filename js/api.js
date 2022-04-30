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

                if (resultado.lyrics) {

                    const { lyrics } = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.cancio} de ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = `La cancion ${this.cancio} de ${this.artista} no exite, prueba con otra busqueda.`;
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        I.divMensajes.textContent = ``;
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }

            })
    }
}

export default API;


//balo