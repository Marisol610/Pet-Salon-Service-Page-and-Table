var salon={
    name:"The Fashion Pet",
    address:{
        street:"university ave.",
        number:"2569"

    },
    hours:{
        open:"8:00 am",
        close:"8:00 pm" 
    },

pets:[]
    
}
       
    
var id=0;

/* display at the bottom of the footer*/
text=
`${salon.name}, ${salon.address.street}, ${salon.address.number} <br>
 open from ${salon.hours.open} to ${salon.hours.close}`;

document.getElementById("footer-info").innerHTML=text;

console.table(salon.pets);

/* constructor*/
class Pet{
    constructor(name,age,gender,type,breed,service,price,ownersName,contactPhone,comments,){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.service=service;
        this.price=price;
        this.owner=ownersName;
        this.contactPhone=contactPhone;
        this.comments=comments;
        this.id=id++;
    }
}

var scooby = new Pet("Scooby",12,"Male","Dog","Dalmation","Full Service",49.99,"Hadassah","555-454-6935");
var tweety = new Pet("Tweety",5,"Female","Bird","Canary","Bath",10.99,"Janelis","414-369-7852");
var snoopy = new Pet("Snoopy",60,"Male","Dog","Chihuahua","Nails Cut",20.99,"Alenid","617-456-3256");
var silvester = new Pet("Silvester",9,"Male","Cat","Tiger","Hair Cut",25.99,"Junior","787-658-1412",);

console.log(scooby);
console.log(tweety);
console.log(snoopy);
console.log(silvester);

/*register function */
const txtName = document.getElementById('petName');
const txtAge = document.getElementById('petAge');
const txtGender = document.getElementById('petGender');
const txtType = document.getElementById('petType');
const txtBreed = document.getElementById('petBreed');
const txtService = document.getElementById('petService');
const txtComments=document.getElementById('petComments');
const txtPrice=document.getElementById('petPrice');
const txtOwner = document.getElementById('ownersName');
const txtContact = document.getElementById('contactPhone');



/* Display on console to verify is correct 
    console.log(txtName.value);
    console.log(txtGender.value);
    console.log(txtAge.value);
    console.log(txtType.value);
    console.log(txtBreed.value);
    console.log(txtService.value);
    console.log(txtOwner.value);
    console.log(txtContact.value); */

function register(){
var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtType.value,txtBreed.value,txtService.value,txtPrice.value,txtOwner.value,txtContact.value,txtComments);
salon.pets.push(thePet);
display(thePet);
clear();
registeredPets();
profitCalculation();


}
function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtComments.value="";
    txtPrice.value="";
    txtOwner.value="";
    txtContact.value="";
    
}

//document.write("Pets registered: " + salon.pets.length + "<br>" + "<br>");
//document.write("Pet names: " +  "<br>" + "1." + salon.pets[0].name + "<br>","2." + salon.pets[1].name + "<br>","3." + salon.pets[2].name + "br","4." + salon.pets[3].name + "<br>","5." + salon.pets[4].name + "<br>");

function registeredPets(){
    document.getElementById('registeredPets').innerHTML=`Number of pets: ${salon.pets.length}`;

}
function profitCalculation(){
    var total=0;
    for(var i=0;i<salon.pets.length;i++){
        total=total + Number(salon.pets[i].price);
    }

    document.getElementById('profits').innerHTML=`Profits: ${total}`;

}
function deletePet(){
    // delete from the array
    //travel the array
    for(var i=0;i<salon.pets.length;i++){
    if(salon.pets[i].id===petId){
        indexDelete=i; //storing the position
    }
    //splice()

}
salon.pets.splice(indexDelete,1);
//delete from the html
//remove
$('#'+petId).remove();
}

function  search({
    //add an input under the index.html
    //get the text from the input $('#petsearch') use (.va) if using jquery); store it in a variable

    //search
    //travel the array (for)
    //compare the variable with salon.pets[i].name
    //store the position

    //highlight the found pet on the table
});
function init(){
    /* display at the bottom of the footer*/
    text=
    `${salon.name}, ${salon.address.street}, ${salon.address.number} <br>
    open from ${salon.hours.open} to ${salon.hours.close}`;

    document.getElementById("footer-info").innerHTML=text;
    
    salon.pets.push(scooby);
    display(scooby);
    salon.pets.push(tweety);
    display(Tweety);
    salon.pets.push(snoopy);
    display(snoopy);
    salon.pets.push(silvester);
    display(silvester);
    registeredPets();
    profitCalculation();
    
}

window.onload-init;

