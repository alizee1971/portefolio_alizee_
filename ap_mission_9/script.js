/* Chéret-Guillet Alizée   */

// Correction automatique
function testqcm() {
    let score = 0;
    
    // Récupèrai toutes les questions
    let form = document.getElementById("qcm");

    // Pour chaque bonne réponse : 
    
    let bonnesReponses = form.querySelectorAll("input[value='1']:checked");
    score = bonnesReponses.length;

    document.getElementById("score").textContent = "Votre score est : " + score + " / 10";
}

// Effacer toutes les réponses : 
function effacer() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(i => i.checket = false);
    document.getElementById("qcm").textContent = "";
    document.getElementById("score").textContent = "";
}

// Ouvrir le corrigé dans une fenêtre externe 
function ouvrircorrige() {
    window.open("corrige.html", "corrige", "width=600,height=600");
}