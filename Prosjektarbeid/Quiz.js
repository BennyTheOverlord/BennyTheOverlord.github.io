let spørsmålContainer = [
    {
        spørsmål: "Hva er cytokinese?",
        tema: "Biologi",
        svarAlternativer: [
            "Den første delen av celledeling", 
            "Den siste delen av celledeling", 
            "Kopiering av DNA før celledeling ", 
            "Nedbrytning av skadede organeller i en celle"
        ],
        fasit: 1
    },
    {
        spørsmål: "Hvor mye av verdenspopulasjonen har grønne øyne?",
        tema: "Genetikk",
        svarAlternativer: [
            "5%",
            "41%",
            "2%",
            "23%"
        ],
        fasit: 2
    },

    {
        spørsmål: "Hvor mange timer er det i en uke?",
        tema: "Tid",
        svarAlternativer: [
            "168",
            "172",
            "156",
            "178"
        ],
        fasit: 0
    }
];

let svarKnapper = document.getElementById("svar-Container");
let aktivSpørsmål = document.getElementById("spørsmål-Container"); //Brukes til å vise det aktive spørsmålet, som er satt i "spørsmål-Container" i html filen
let aktivSpørsmålIndex = 0; //Brukes til å finne det riktige spørsmålet i arrayen, slik at man kan sjekke svaret

let answer1 = document.getElementById("svar1");
let answer2 = document.getElementById("svar2");
let answer3 = document.getElementById("svar3");
let answer4 = document.getElementById("svar4");



function definerSvar(spørsmål) {
    for (let i = 0; i < spørsmålContainer[spørsmål].svarAlternativer.length; i++) {
        document.getElementById("svar" + (i + 1)).innerHTML = (spørsmålContainer[spørsmål].svarAlternativer[i]);
    }
    aktivSpørsmål.innerHTML = spørsmålContainer[spørsmål].spørsmål;
};

definerSvar(aktivSpørsmålIndex);

function sjekkSvar(valgtSvar) {
    let riktigSvar = spørsmålContainer[aktivSpørsmålIndex].fasit;

    let valgtAlternativ = document.getElementById("svar" + (valgtSvar + 1));

    if (valgtSvar === riktigSvar) {
        console.log("Du svarte riktig");
        valgtAlternativ.style.backgroundColor = "green";

        setTimeout(function() {
            valgtAlternativ.style.backgroundColor = "white"; //Sett in "white" igjen senere

             aktivSpørsmålIndex++;
            definerSvar(aktivSpørsmålIndex);
        }, 1000);

     } else {
        console.log("Du svarte feil")
        valgtAlternativ.style.backgroundColor = "red";

        setTimeout(function() {
            valgtAlternativ.style.backgroundColor = "white"; //Sett in "white" igjen senere

             aktivSpørsmålIndex++;
            definerSvar(aktivSpørsmålIndex);
        }, 1000);

     }

    };


answer1.addEventListener("click", function() {
    sjekkSvar(0);
});

answer2.addEventListener("click", function() {
    sjekkSvar(1);
});

answer3.addEventListener("click", function() {
    sjekkSvar(2);
});

answer4.addEventListener("click", function() {
    sjekkSvar(3);
});