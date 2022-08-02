console.log("JavaScript funguje!");

let visualniHlavniOdstavec = document.querySelector(".hlavni-odstavec");
visualniHlavniOdstavec.textContent = "Domovská stránka";

let visualniMojeFoto = document.querySelector(".moje-foto");
visualniMojeFoto.src = "img/druhe-foto.jpeg"

let visualniPredstaveniSe = document.querySelector(".predstaveni-se");
visualniPredstaveniSe.style.color = "dodgerblue";

let visualniSkoly = document.querySelector(".vzdelani");
visualniSkoly.textContent = "Školy";


function pridejZvyrazneni(){
    let visualniTridaTlacitka = document.querySelector(".tlacitko1");
    visualniTridaTlacitka.classList.add("zvyrazneny");
}