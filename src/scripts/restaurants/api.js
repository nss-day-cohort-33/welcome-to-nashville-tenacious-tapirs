// fetch data from API
function getAPIrestaurants(searchedName) {
    return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=4&q=${searchedName}&apikey=${restaurantsAppKeys}`)
    .then( APIdata => APIdata.json())
}

function addAPIData(cuisineItem) {
        getAPIrestaurants(cuisineItem)
        .then( restaurantData => {
            let cuisinesArr = restaurantData.restaurants
            for (let i=0; i < cuisinesArr.length; i++) {
                let restaurantInfo = cuisinesArr[i].restaurant
                addRestaurantsToDom(createRestaurantsSearchComponent(restaurantInfo))
            }
        })
}

