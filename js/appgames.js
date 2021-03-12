


function init() {

    getGamees("all");
    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getGamees(this.value);
        });
    }
}
function getGamees(pType) {

    fetch('../json/games.json')
        .then(response => response.json())
        .then((collection) => {

            pintarListaGames(collection.games, pType);

        });
}

const pintarListaGames = (listaGames, pType) => {
    const container = document.getElementById("card-container2");
    container.innerHTML = "";
    for (let game of listaGames) {
        if (pType == game.type || pType == "all") {
            container.innerHTML += `
            
                <div class="card" >
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${game.img}"  alt="game image">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${game.title}</h5>
                                <p class="card-text">${game.enterprise}</p>
                                <p class="card-text">${game.gener}</p>
                                <p class="card-text">${game.opinion}</p>
                                <a href="${game.link}" class="btn btn-primary">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            `;
        }
    }
};
init();

