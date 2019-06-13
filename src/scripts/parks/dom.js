let selected = ""


document.querySelector("#searchParksBtn").addEventListener("click", event =>{
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
    if(document.querySelector("#historicFeatures").checked){
        selected += "&historic_features=Yes"
    }
    addParksData(selected);
    UnSelectAllFeatures();
    })


    function addParksData(userInput){
       getParks(userInput)
       .then(parksArr => {
           for (i = 0; i< parksArr.length; i++) {
               addParkResultsToDom(parksResultsComponent(parksArr[i]))
           }
       })
    }

    function UnSelectAllFeatures(){
        const checkBox=document.getElementsByName("parkFeature");
        for(i=0; i<checkBox.length; i++){
            if(checkBox[i].type=='checkbox')
                checkBox[i].checked=false;
        }
    }