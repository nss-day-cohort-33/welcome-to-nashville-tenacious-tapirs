function getParks(selected){
    return fetch (`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=${parksAppKeys.appToken}${selected}`)
.then (data => data.json())
}

