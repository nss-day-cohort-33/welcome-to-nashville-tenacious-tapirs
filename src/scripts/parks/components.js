function parksResultsComponent(parkObj){
    return `
    <p><h4>${parkObj.park_name}</h4> 
    ${parkObj.mapped_location.human_address.address} <button id="parksSaveBtn">Save</button></p>`
 }

 function addParkResultsToDom(parksResult){
    let parkResultsContainer = document.querySelector("#parksContainer")
    parkResultsContainer.innerHTML += parksResult
}

