function parksResultsComponent(parkObj){
    return `
    <p><h4>${parkObj.park_name}</h4> 
${parkObj.mapped_location_address} ${parkObj.mapped_location_city}, ${parkObj.mapped_location_state} <button id="parksSaveBtn">Save</button></p>`
 }

 function addParkResultsToDom(parksResult){
    let parkResultsContainer = document.querySelector("#parksContainer")
    parkResultsContainer.innerHTML += parksResult
}

