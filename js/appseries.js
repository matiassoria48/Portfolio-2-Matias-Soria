
function init() {

    getSeriees("all");
    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getSeriees(this.value);
        });
    }
}
function getSeriees(pType) {

    fetch('../json/series.json')
        .then(response => response.json())
        .then((collection) => {

            pintarListaSeries(collection.series, pType);

        });
}

const pintarListaSeries = (listaSeries, pType) => {
    const container = document.getElementById("card-container6");
    container.innerHTML = "";
    for (let serie of listaSeries) {
        if (pType == serie.type || pType == "all") {
            container.innerHTML += `
            
                <div class="card" >
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${serie.img}"  alt="serie image">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${serie.title}</h5>
                        
                                <p class="card-text">${serie.gener}</p>
                             
                                <p class="card-text">${serie.opinion}</p>
                                <a href="${serie.link}" class="btn btn-primary">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div> 
               
            `;
        }
    }
};
init();