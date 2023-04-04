

function redirect(){
    event.preventDefault();

    let option = document.getElementById("choseTask").value; 

    option = parseInt(option);

    switch(Number(option)){
        case 1 : window.location.href = "task1/index.html" ; 
            break;
        case 2 : window.location.href = "task2/index.html" ; 
            break;
        case 3 : window.location.href = "task3/index.html" ;
            break;
        case 4 : window.location.href = "task4/index.html" ;
            break; 
    }

}