//spørsmålContainer: array som inneholder alle spørsmålene i quizen
//Hvert objekt i arrayen har:
    //spørsmål: teksten som skal vises som spørsmål
    //tema: kategorien til spørsmålet (rakk ikke å gjøren noe med dette)
    //svarAlternativer: svarmulighetene brukeren har
    //fasit: det korrekte svaret av de 4 svar alternativene
let spørsmålContainer = [ //Definerer en variabel "spørsmålContainer", og sier at denne variabelen skal være en array 
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

let aktivSpørsmål = document.getElementById("spørsmål-Container"); //Brukes til å vise det aktive spørsmålet, som er satt i "spørsmål-Container" i html filen
let aktivSpørsmålIndex = 0; //Brukes til å finne det riktige spørsmålet i arrayen, slik at man kan sjekke svaret og vise spørsmålet

let answer1 = document.getElementById("svar1"); //Definerer variabelen "answer1" som html elementet med id-en "svar1"
let answer2 = document.getElementById("svar2"); //^^^, men for "svar2"
let answer3 = document.getElementById("svar3"); //^^^, men for "svar3"
let answer4 = document.getElementById("svar4"); //^^^, men for "svar4"



function definerSvar(spørsmål) { //Lager en function kalt "definerSvar" som oppdaterer spørsmålet og svaralternativene i html
    for (let i = 0; i < spørsmålContainer[spørsmål].svarAlternativer.length; i++) { //For-løkke som går gjennom alle svaralternativene til det valgte spørsmålet
        document.getElementById("svar" + (i + 1)).innerHTML = (spørsmålContainer[spørsmål].svarAlternativer[i]); //Finner html elementet med id-en "svar1", "svar2" etc, og fyller det med det i-te svaralternativet
    }
    aktivSpørsmål.innerHTML = spørsmålContainer[spørsmål].spørsmål; //Setter aktivSpørsmål innerHTML til spørsmålet i "spørsmål". Altså viser spørsmålet
};

definerSvar(aktivSpørsmålIndex); //Kjører funksjonen "definerSvar" for aktivSpørsmålIndex og viser spørsmålet som skal være aktivt

function sjekkSvar(valgtSvar) { //Lager en function "sjekkSvar" som sjekker om valgt svaralternativ (valgtSvar) er korrekt for det aktive spørsmålet
    let riktigSvar = spørsmålContainer[aktivSpørsmålIndex].fasit; //Definerer "riktigSvar" som fasiten til det aktive spørsmålet

    let valgtAlternativ = document.getElementById("svar" + (valgtSvar + 1)); //Definerer "valgtAlternativ" som "svar" + (valgtSvar + 1) og henter HTML-elementet for "valgtSvar"

    if (valgtSvar === riktigSvar) { //Lager en if-statement for når valgtSvar har lik verdi og type verdi som riktigSvar
        console.log("Du svarte riktig");
        valgtAlternativ.style.backgroundColor = "green"; //Endrer bakgrunnsfargen (grønn) til det valgte alternativet hvis brukeren svarte riktig

        setTimeout(function() { //Lager en timeout funksjon som kjører etter 1 sekund, endrer fargen og går til neste spørsmål
            valgtAlternativ.style.backgroundColor = "white"; //Setter bakgrunssfargen til det valgte svaret hvit igjen 

             aktivSpørsmålIndex++; //Går til neste spørsmål
            definerSvar(aktivSpørsmålIndex); //Kaller definerSvar funksjonen
        }, 1000);

     } else { //Sier hva som skjer hvis brukeren svarte feil
        console.log("Du svarte feil")
        valgtAlternativ.style.backgroundColor = "red"; //Setter bakgrunnsfargen til rød for det valgte alternativet

        setTimeout(function() { //Lager en timeout som varer i ett sekund
            valgtAlternativ.style.backgroundColor = "white"; //Setter bakgrunssfargen tilbake igjen til hvit

             aktivSpørsmålIndex++; //Går til neste spørsmål
            definerSvar(aktivSpørsmålIndex); //Kaller definerSvar funksjonen
        }, 1000);

     }

    };


answer1.addEventListener("click", function() { //Venter til "answer1" blir trykket, og kjører en function som kaller sjekkSvar for index = 0
    sjekkSvar(0);
});

answer2.addEventListener("click", function() { //^^^, men for index = 1
    sjekkSvar(1);
});

answer3.addEventListener("click", function() { //^^^, men for index = 2
    sjekkSvar(2);
});

answer4.addEventListener("click", function() { //^^^, men for index = 3
    sjekkSvar(3);
});