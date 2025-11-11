let tallListe = []
let antallTall = 20
let tallStørreEnnFem = []
let tallLikFire = []
let størsteTall = 0;
let minsteTall = 20;

for (let i = 0; i < antallTall; i++) {
    tall = Math.floor(Math.random()*(20 + 1))
    tallListe.push(tall);
    
    if (tall >= 5) {
        tallStørreEnnFem.push(tall)
    } else if (tall == 4) {
        tallLikFire.push(tall);
    };

    if (tall > størsteTall) {
        størsteTall = tall
    };

    if (tall < minsteTall) {
        minsteTall = tall
    };
};

let sum = tallListe.reduce((akk, tall) => akk + tall, 0);
console.log(sum)

console.log(tallListe);
console.log(tallStørreEnnFem);
console.log(tallStørreEnnFem.length);
console.log(tallLikFire);
console.log(sum / antallTall);
console.log(størsteTall);
console.log(minsteTall);