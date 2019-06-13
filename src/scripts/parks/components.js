function parksResultsComponent(parkObj){
    return `
    <h4 id="parkName-${parkObj.idNum}">${parkObj.park_name}</h4><p id="parkAddress-${parkObj.idNum}"> 
${parkObj.mapped_location_address} ${parkObj.mapped_location_city}, ${parkObj.mapped_location_state} </p><button id="savePark-${parkObj.idNum}" class="parksSaveBtn">Save</button>`

 }

 function addParkResultsToDom(parksResult){
    let parkResultsContainer = document.querySelector("#parksContainer")
    parkResultsContainer.innerHTML += parksResult
}


    