
function init() {

    getMoviees("all");
    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getMoviees(this.value);
        });
    }
}
function getMoviees(pType) {

    fetch('../json/movies.json')
        .then(response => response.json())
        .then((collection) => {

            pintarListaMovies(collection.movies, pType);

        });
}

const pintarListaMovies = (listaMovies, pType) => {
    const container = document.getElementById("card-container4");
    container.innerHTML = "";
    for (let movie of listaMovies) {
        if (pType == movie.type || pType == "all") {
            container.innerHTML += `
                <div class="card" >
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${movie.img}"  alt="movie image">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${movie.title}</h5>
                                
                               
                                <p class="card-text">${movie.gener}</p>
                                <p class="card-text">${movie.opinion}</p>
                                <a href="${movie.link}" class="btn btn-primary">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
init();

