function getParks(selected){
    return fetch (`https://data.nashville.gov/resource/74d7-b74t.json?$$app_token=${parksAppKeys.appToken}${selected}`)
.then (data => data.json())
}

