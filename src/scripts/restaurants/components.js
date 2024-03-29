// event listener for restaurant form

document.querySelector("#searchRestaurantsBtn").addEventListener("click", event => {
    let searchInput = document.querySelector("#searchRestaurants").value
    document.querySelector("#searchRestaurants").value = ""
    document.querySelector("#searchResultsDiv").innerHTML = ""
    addAPIData(searchInput)
    })



function addRestaurantsToDom(restaurantComponent) {
    document.querySelector("#searchResultsDiv").innerHTML += restaurantComponent
}

function createRestaurantsSearchComponent(restaurantsObj, i) {
    return `
    <div>
    <p>${restaurantsObj.name}: ${restaurantsObj.location.address}</p> <button class="saveBtn" id="saveEntry-${i}">Save</button>
    </div>    
    `
}

// function to inject HTML into Itenerary div
function addRestaurantsToItenerary (restaurantsObj) {
    document.querySelector("#restaurantsItenerary").innerHTML += 
    `
    <section>
        <h3>${restaurantsObj.name}</h3>
        <div>${restaurantsObj.location.address}</div>
    </section>
`
}