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
        fasit: "1"
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
        fasit: "2"
    },
];

// let spørsmål1 = spørsmålContainer[0];
let aktivSpørsmål = document.getElementById("spørsmål-Container");



// document.getElementById("svar1").innerText = (spørsmålContainer[0].svarAlternativer[0]);
// document.getElementById("svar2").innerText = (spørsmålContainer[0].svarAlternativer[1]);
// document.getElementById("svar3").innerText = (spørsmålContainer[0].svarAlternativer[2]);
// document.getElementById("svar4").innerText = (spørsmålContainer[0].svarAlternativer[3]);

function definerSvar(spørsmål) {
    for (let i = 0; i < spørsmålContainer[spørsmål].svarAlternativer.length; i++) {
        document.getElementById("svar" + (i + 1)).innerHTML = (spørsmålContainer[spørsmål].svarAlternativer[i]);
    }
    aktivSpørsmål.innerHTML = spørsmålContainer[spørsmål].spørsmål;
};

definerSvar(1);