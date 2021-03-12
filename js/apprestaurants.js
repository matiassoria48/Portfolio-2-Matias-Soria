
function init() {

    getRestaurantes("all");
    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getRestaurantes(this.value);
        });
    }
}
function getRestaurantes(pType) {

    fetch('../json/restaurants.json')
        .then(response => response.json())
        .then((collection) => {

            pintarListaRestaurants(collection.restaurants, pType);

        });
}

const pintarListaRestaurants = (listaRestaurants, pType) => {
    const container = document.getElementById("card-container5");
    container.innerHTML = "";
    for (let restaurant of listaRestaurants) {
        if (pType == restaurant.type || pType == "all") {
            container.innerHTML += `
                <div class="card">
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${restaurant.img}"  alt="restaurant image">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${restaurant.title}</h5>
                        
                                <p class="card-text">${restaurant.address}</p>
                             
                                <p class="card-text">${restaurant.opinion}</p>
                                <a href="${restaurant.link}" class="btn btn-primary">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
init();