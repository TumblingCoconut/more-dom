/*  @TODO - Add references to the elements we want to use  */
let changeButton = document.getElementById("change_button");
let addButton = document.getElementById("add_button");
let deleteButton = document.getElementById("delete_button");
let imageDiv = document.getElementById("image_div");
let firstImage = document.getElementById("first_image");



/*  @TODO - Create an array of Pokemon to select from  */
let pokemonArray = ["pikachu", "bulbasaur", "squirtle", "charmander"]

/*  @TODO - Create a Function for our changeButton to change first Pokemon  */
let counter = 0;
function changeImage() {
    firstImage.src = "images/" + pokemonArray[counter] +".png";
    counter ++;
    if (counter >= pokemonArray.length) {
        counter = 0;
    }
}
changeButton.addEventListener("click", changeImage);


/*  @TODO - Create a Function for our addButton to Add New Pokemon  */
function addImage() {
    let newPokemon = document.createElement("img");
    newPokemon.src = "images/squirtle.png";
    imageDiv.appendChild(newPokemon);
}
addButton.addEventListener("click", addImage);

/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */
function deleteImage() {
    imageDiv.removeChild(imageDiv.children[1]);
}
deleteButton.addEventListener("click", deleteImage);
