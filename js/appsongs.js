
function init() {

    getSonges("all");
    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getSonges(this.value);
        });
    }
}
function getSonges(pType) {

    fetch('../json/songs.json')
        .then(response => response.json())
        .then((collection) => {

            pintarListaSongs(collection.songs, pType);

        });
}

const pintarListaSongs = (listaSongs, pType) => {
    const container = document.getElementById("card-container7");
    container.innerHTML = "";
    for (let song of listaSongs) {
        if (pType == song.type || pType == "all") {
            container.innerHTML += `
                <div class="card" >
                    <div class="row ">
                        <div class="col-md-5">
                            <img src="${song.img}" alt="song image">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${song.title}</h5>
                        
                                <p class="card-text">${song.artist}</p>
                             
                                <p class="card-text">${song.opinion}</p>
                                <a href="${song.link}" class="btn btn-primary">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
init();