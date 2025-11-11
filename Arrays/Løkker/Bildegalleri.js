let arrayBilder = [
    "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/12C7A/production/_119322967_e3f854db-d237-4839-a25e-50f5d46d7ff0.jpg",
    "https://media.snl.no/media/59361/standard_compressed_Panda_spiser.jpg",
    "https://animalfactguide.com/wp-content/uploads/2025/03/panda-climbing.jpg",
    "https://media.snl.no/media/164049/standard_compressed_Giant_Panda_Eating.jpg"
]

let bildeElement = document.getElementById("bilde1");
let index = 0;
bildeElement.src = arrayBilder[index];
let nesteKnapp = document.getElementById("nesteBilde")
let forrigeKnapp = document.getElementById("forrigeBilde")

nesteKnapp.addEventListener("click", function() {
    index++;

    if (index >= arrayBilder.length) {
        index = 0;
    }
    bildeElement.src = arrayBilder[index];
});

forrigeKnapp.addEventListener("click", function() {

    if(index > 0) {
        index--;
    }
    bildeElement.src = arrayBilder[index];
});

document.addEventListener("keydown", function(event) {
    console.log(event.key)
    if (event.key == "ArrowLeft") {
        index++;
        if (index >= arrayBilder.length) {
            index = 0;
        }
        bildeElement.src = arrayBilder[index];
    }
    if (event.key == "ArrowRight") {
        if(index > 0) {
            index--;
        }
        bildeElement.src = arrayBilder[index];

        }
});
