let tall = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let hemmeligTall = tall[(Math.floor(Math.random() * tall.length))];

let gjettetTall = Number(prompt("Klarer du å gjette hvilket tall jeg tenker på? Hint: Tallet er fra 0-10"));

if (gjettetTall == hemmeligTall) {

    document.getElementById("riktigTall").innerText = "Riktig!"

}  else if (hemmeligTall > gjettetTall) {
    alert("For lavt!")

} else {
   alert("For høyt!")
}

while (gjettetTall != hemmeligTall) {
         gjettetTall = Number(prompt("Prøv igjen!"));
    }




