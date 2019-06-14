let selected = ""

const makeParksHappen = document.querySelector("#searchParksBtn").addEventListener("click", event =>{

    parkResultsContainer.innerHTML = ""
    selected = ""
    if (document.querySelector("#lakeFeature").checked){
        selected += "&lake=Yes"        
    }
    if(document.querySelector("#dogParkFeature").checked){
        selected += "&dog_park=Yes"
    }
    if(document.querySelector("#hikingTrailFeature").checked){
        selected += "&hiking_trails=Yes"
    }
    if(document.querySelector("#picnicShelter").checked){
        selected += "&picnic_shelters=Yes"
    }
    if(document.querySelector("#discGolfFeature").checked){
        selected += "&disc_golf=Yes"
    }
    addParksData(selected);
    unSelectAllFeatures();
    })

    function addParksData(userInput){
       getParks(userInput)
       .then(parksArr => {
           for (i = 0; i<5; i++) {
            parksArr[i].idNum = i
               addParkResultsToDom(parksResultsComponent(parksArr[i]))
               grabParksButtons()
               }
           })
       }

    function unSelectAllFeatures(){
        const checkBox=document.getElementsByName("parkFeature");
        for(i=0; i<checkBox.length; i++){
            if(checkBox[i].type=='checkbox')
                checkBox[i].checked=false;
        }
    }

    function grabParksButtons(){
        const parkSaveButtons = document.querySelectorAll(".parksSaveBtn")
         for (i=0; i<parkSaveButtons.length; i++){
             parkSaveButtons[i].addEventListener("click", event => {
               parksAddToItinerary()  
             })
         }
       }
       
       function parksAddToItinerary(){
           const parksButtonId = event.target.id
           const parksButtonArr = parksButtonId.split("-")
           const parksButtonIdNum = parksButtonArr[1]
           const parksNameId = "parkName-" + parksButtonIdNum
           const parksNameElement = document.querySelector("#"+parksNameId).innerHTML
           const parksAddressId = "parkAddress-" + parksButtonIdNum
           const parksAddressElement = document.querySelector("#"+parksAddressId).innerHTML
           document.querySelector("#parksItenerary").innerHTML = `
           <div><b>${parksNameElement}</b> at ${parksAddressElement}</div>`
       }