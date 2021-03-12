
function init() {

    getHoteles("all");
    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getHoteles(this.value);
        });
    }
}
function getHoteles(pType) {

    fetch('../json/hotels.json')
        .then(response => response.json())
        .then((collection) => {

            pintarListaHotels(collection.hotels, pType);

        });
}

const pintarListaHotels = (listaHotels, pType) => {
    const container = document.getElementById("card-container3");
    container.innerHTML = "";
    for (let hotel of listaHotels) {
        if (pType == hotel.type || pType == "all") {
            container.innerHTML += `
                <div class="card" >
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${hotel.img}"  alt="hotel image">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${hotel.title}</h5>
                        
                                <p class="card-text">${hotel.address}</p>
                             
                                <p class="card-text">${hotel.opinion}</p>
                                <a href="${hotel.link}" class="btn btn-primary">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
init();