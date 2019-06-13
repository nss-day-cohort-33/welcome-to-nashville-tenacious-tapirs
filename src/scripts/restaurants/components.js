// event listener for restaurant form

document.querySelector("#searchRestaurantsBtn").addEventListener("click", event => {
    let searchInput = document.querySelector("#searchRestaurants").value
    document.querySelector("#restaurantsContainer").innerHTML = ""
    addAPIData(searchInput)
    })



function addRestaurantsToDom(restaurantComponent) {
    document.querySelector("#restaurantsContainer").innerHTML += restaurantComponent
}

function createRestaurantsSearchComponent(restaurantsObj) {
    return `
    <div>
    <p>${restaurantsObj.name}: ${restaurantsObj.location.address} <button id = "restaurantsSaveBtn">Save</button></p>
    </div>    
    `
}

// document.querySelector("#restaurantsSaveBtn").addEventListener("click", event => {
//     let iteneraryResult = document.querySelector("#")
// })