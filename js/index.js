const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button = document.querySelectorAll("button");
const text1 = document.querySelector(".compteur");
const ef = document.querySelector(".ef");
const efTT = document.querySelector(".efTT");
const res = document.querySelector(".res");
const resTT = document.querySelector(".resTT");
let i = 0;
let tt = i;
let reset = 0;
let resetTTC = 0;

button1.addEventListener("pointerdown", () => {
    i++;
    tt++;
    console.log("Effectif : "+i+" | Effectif total : " + tt);
    text1.textContent = "Nombre de click : "+i;
});

button2.addEventListener("pointerdown", () => {
    reset++;
    if (reset >= i)
    {
        reset = 0;
        console.log("Le compteur est déjà à zéro");
    }
    i = 0;
    resetTTC++;
    console.log("Effectif de reset : "+reset+" | Effectif total de reset : "+resetTTC);
    
    text1.textContent = "Nombre de click : "+i;
    
})

/*
button1.forEach(b => {
    b[0].addEventListener("pointerdown", () => {
    i++;
    tt++;
    console.log("Effectif : "+i+" | Effectif total : " + tt);
    text1.textContent = "Nombre de click : "+i;
    ef.textContent = "Effectif : " + i;
});
    
    efTT.textContent = "Effectif total : " +tt;
})
    */