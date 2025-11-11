let alder = Number(prompt("Hvor gammel er du?"))
let resultat = document.getElementById("resultat");

if (alder < 16) {
    resultat.innerHTML = 
    "<h3>Du er for ung til å ta sertifikat!</h3>"
} else if (alder >= 16 && alder < 18) {
    resultat.innerHTML =
    "<h3>Du kan ta mopedsertifikat!</h3>"
} else if (alder >= 18 && alder < 21) {
    resultat.innerHTML =
    "<h3>Du kan ta moped- og bilsertifikat</h3>"
} else if (alder >= 21 && alder < 24) {
    resultat.innerHTML =
    "<h3>Du kan ta moped-, bil-, og lastebil-sertifikat</h3>"
} else if (alder >= 24) {
    resultat.innerHTML =
    "<h3>Du kan ta moped-, bil-, lastebil- og buss-sertifikat</h3>"
}