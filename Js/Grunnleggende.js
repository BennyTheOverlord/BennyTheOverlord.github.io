//Variabler

//let antallLiv = 100;

//const NAVN = "Benjamin"
//let navn = "Ben ";
//let alder = prompt("Hvor gammel er du?");
//let alder = "..."

//const PI = Math.PI;

//let arrayBilder = ["bilde.jpg", "bilde2.jpg"];

//Skrive ut
//console.log("Mitt navn er" + navn);
//console.log(`Mitt navn er ${navn} ! og jeg er ${alder} år gammel`);

//console.table(arrayBilder);

//console.warn(PI);

//alert("Yahoo");

//let årstall = new Date().getFullYear();

//document.getElementById("utskrift").innerText = "Mitt navn er " + navn;
//document.getElementById("alder").innerText = "Du er " + alder;
//document.getElementById("alder").innerText = "Du er født i " + (årstall-alder)

//if (alder == 43) {
    //alert("Du er 43")
//} else {
    //alert("Du er ikke 43")
//}

// for (let index = 0; index < arrayBilder.length; index = index+ 1) {
//     console.log(arrayBilder[index]);
    
// }
//Første er hvor vi begynner, andre er hvor vi slutter, og tredje er hvor mange hopp man gjør om gangen

//function siHei() {
    //console.log("Hei");
//}
//siHei();

//document.body.style.backgroundColor = "blue";
//document.getElementById("utskrift").style.fontSize = "7rem";

// const htmlElement = document.getElementById("knapp");

// htmlElement.addEventListener("click", () => {
//         knappOkalypse("knapp");
//         htmlElement.style.transition = "transform 0.4s ease, opacity 0.4s ease";
//             htmlElement.style.transform = "scale(10)";
        
//         setTimeout(() => htmlElement.remove(), 400);
//         const interval = setInterval(() => {
//             document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
//         }, 200);
        
//         setTimeout(() => { clearInterval(interval);
//          document.body.style.backgroundColor = ("white");
//          }, 5000);
//     });

    

// function knappOkalypse(htmlElement) {
//     const original = document.getElementById(htmlElement);
//     const kopi = original.cloneNode(true);
//     document.body.appendChild(kopi);
//     kopi.addEventListener("click", () => {
//         knappOkalypse("knapp");
//         kopi.style.transition = "transform 0.4s ease, opacity 0.4s ease";
//         kopi.style.transform = "scale(10)";
//         kopi.style.opacity = "0";
//         setTimeout(() => kopi.remove(), 400);
//     });
// }

const form = document.getElementById("input1")
const input1 = document.getElementById("brukerInput1")
const input2 = document.getElementById("brukerInput2")



form.addEventListener("submit", (event) => {
    event.preventDefault()
    const stedsnavn1 = input1.value 
    const stedsnavn2 = input2.value

        let stedsnavnlengde1 = input1.value.length;
        let stedsnavnlengde2 = input2.value.length;
        let differanse = stedsnavnlengde1 - stedsnavnlengde2;
            differanse = Math.abs(differanse);
                console.log(differanse)
        document.getElementById("resultat").innerText = "Differansen mellom stedsnavnene er " + differanse;

        const interval = setInterval(() => {
            document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
        }, 200);
        
        setTimeout(() => { clearInterval(interval);
         document.body.style.backgroundColor = ("white");
         }, 5000);
})

