
function showResult(){
    event.preventDefault()

    let numberOfGroups = document.getElementById("numOfGroup").value;
    let numberOfPeople = document.getElementById("PeopleInGroup").value;
    let overlayAsour = document.getElementById("overlay-asour");
    let overlayYabrud = document.getElementById("overlay-yabrud");
    let overlayEibal = document.getElementById("overlay-eibal");
    let overlaySheik = document.getElementById("overlay-sheik");
    let overlayJrmoq = document.getElementById("overlay-jormuq");
    let percentAsourText = document.getElementById("percent-asour");
    let percentYabrudText = document.getElementById("percent-yabrud");
    let percentEibalText = document.getElementById("percent-eibal");
    let percentSheikText = document.getElementById("percent-sheik");
    let percentJurmoqText = document.getElementById("percent-jormuq");

    numberOfPeople  = numberOfPeople                 // string
    .split( ' ' )                         // string[]
    .map( e => parseInt( e, 10 ) )       // ( number | NaN )[]
    .filter( n => !isNaN( n ))          // number[]

    if (numberOfPeople.length != numberOfGroups || numberOfPeople== ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Make Sure That The Number Of People Is Equal',
        })
        return false;
    }else { 
        let totalNumberOfPeople  = 0;
        let numberOfGroupsAsour = 0;
        let numberOfGroupsEibal = 0;
        let numberOfGroupsYabrud = 0;
        let numberOfGroupsSheik = 0;
        let numberOfGroupsJormoq = 0;

        for(let i = 0 ; i< numberOfPeople.length ; i++){
            totalNumberOfPeople += numberOfPeople[i];

            if(numberOfPeople[i] <= 5 && numberOfPeople[i] >= 1){
                numberOfGroupsAsour += numberOfPeople[i];
            }else if (numberOfPeople[i] > 5 && numberOfPeople[i] <= 12){
                numberOfGroupsYabrud += numberOfPeople[i];
            }else if (numberOfPeople[i] > 12 && numberOfPeople[i] <= 25){
                numberOfGroupsEibal += numberOfPeople[i];
            }else if (numberOfPeople[i] > 25 && numberOfPeople[i] <= 40){
                numberOfGroupsSheik += numberOfPeople[i];
            }else if (numberOfPeople[i] > 40){
                numberOfGroupsJormoq += numberOfPeople[i];
            }
        }


        let percentAsour = (numberOfGroupsAsour / totalNumberOfPeople) * 100;
        let percentYabrud = (numberOfGroupsYabrud / totalNumberOfPeople) * 100;
        let percentEibal = (numberOfGroupsEibal / totalNumberOfPeople) * 100;
        let percentSheik = (numberOfGroupsSheik / totalNumberOfPeople) * 100;
        let percentJormoq = (numberOfGroupsJormoq / totalNumberOfPeople) * 100;


        overlayAsour.style.height = percentAsour + "%";
        overlayYabrud.style.height = percentYabrud + "%";
        overlayEibal.style.height = percentEibal + "%";
        overlaySheik.style.height = percentSheik + "%";
        overlayJrmoq.style.height = percentJormoq + "%";


        percentAsourText.innerText = percentAsour.toFixed(1) + "%";
        percentEibalText.innerText = percentEibal.toFixed(1) + "%";
        percentJurmoqText.innerText = percentJormoq.toFixed(1) + "%";
        percentSheikText.innerText = percentSheik.toFixed(1) + "%";
        percentYabrudText.innerHTML = percentYabrud.toFixed(1) + "%";
    }

}

