
function init() {

    getTripes("all");
    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getTripes(this.value);
        });
    }
}
function getTripes(pType) {

    fetch('../json/trips.json')
        .then(response => response.json())
        .then((collection) => {

            pintarListaTrips(collection.trips, pType);

        });
}

const pintarListaTrips = (listaTrips, pType) => {
    const container = document.getElementById("card-container8");
    container.innerHTML = "";
    for (let trip of listaTrips) {
        if (pType == trip.type || pType == "all") {
            container.innerHTML += `
                <div class="card">
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${trip.img}"  alt="trip image">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${trip.title}</h5>
                                <p class="card-text">${trip.address}</p>
                                <p class="card-text">${trip.opinion}</p>
                                <a href="${trip.link}" class="btn btn-primary">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
init();