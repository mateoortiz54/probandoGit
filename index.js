const album = document.getElementById('tbodyAlbums');
const url = 'https://jsonplaceholder.typicode.com/albums'

const obtenerData = async function () {
    const response = await fetch(url);
    const data = await response.json();

    renderizar(data)
};


function renderizar(datos) {
    let j = 0;
    while(j < datos.length) {
        for (let i = 0; i < 10; i++) {
            album.innerHTML += '<td>' + datos[i+j].userId + '</td><td>' + datos[i+j].id + '</td><td>' + datos[i+j].title + '</td>';
        }
        j=j+10;
    }

}

obtenerData()











