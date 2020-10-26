function display(aPet){
    // create the vars
    var text="";

    var dogicon= '<i class="fas fa-dog"></i>';
    var caticon= '<i class="fas fa-cat"></i>';
    var birdicon= '<i class="fas fa-crow"></i>';
    
    
        //display the Icon of the type of pet, hint use(if)
        if(aPet[i].type==="Dog"){
            icon=dogicon;
        }else if(aPet[i].type==="Cat"){
            icon=caticon;

        }else if(aPet[i].type==="Bird"){
            icon=birdicon;
        }else{
            icon='<i class="fas fa-question-circle"></i>';
        }
        // create HTML text
        text=`
        <div id="${aPet.id}" class="pet">
        ${icon}
            <h2> Name:${aPet[i].name} </h2>
            <p> Age: ${aPet[i].age}</p>
            <p> Gender: ${aPet[i].gender}</p>
            <p> Type: ${aPet[i].type}</p>
            <p> Breed:${aPet[i].breed} </p>
            <p> Service: ${aPet[i].service}</p>
            <p> Comments: ${aPet[i].comments}</p>
            <p> Price: ${aPet[i].price}<p>
            <p> Owner: ${aPet[i].owner}</p>
            <p> Contact Phone: ${aPet[i].contactPhone}</p>
            <button class="btn btn-danger" onclick='deletePet(${aPet.id})'>
            Delete </button>
            
        </div>
        `;
        
    
    $('#pets').append(text);
}
    

    

      



    //display the HTML text into the DOM(DOCUMENT)


// use the display function
