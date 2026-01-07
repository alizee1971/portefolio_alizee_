/*Chéret-Guillet Alizée*/
/*function resultat()
{
    var k = document.getElementById("desc1").value;
    var l = document.getElementById("qty1").value;
    var n = document.getElementById("price1").value;
    var m = Number(k) * Number(l) * Number(n);
    document.getElementById("total1").value = m;
    
    var a = document.getElementById("desc2").value;
    var b = document.getElementById("qty2").value;
    var c = document.getElementById("price2").value;
    var d = Number(a) * Number(b) * Number(c);
    document.getElementById("total2").value = d;

    var z = document.getElementById("desc3").value;
    var e = document.getElementById("qty3").value;
    var r = document.getElementById("price3").value;
    var t = Number(z) * Number(e) * Number(r);
    document.getElementById("total3").value = t;

    var y = document.getElementById("desc4").value;
    var u = document.getElementById("qty4").value;
    var i = document.getElementById("price4").value;
    var o = Number(y) * Number(u) * Number(i);
    document.getElementById("total4").value = o;

    var p = document.getElementById("desc5").value;
    var q = document.getElementById("qty5").value;
    var s = document.getElementById("price5").value;
    var f = Number(p) + Number(q) + Number(s);
    document.getElementById("total5").value = f;

    var g = document.getElementById("total1").value;
    var h = document.getElementById("total2").value;
    var j = document.getElementById("total3").value;
    var k = document.getElementById("total4").value;
    var l = document.getElementById("total5").value;
    var m = Number(g) + Number(h) + Number(j) + Number(k) + Number(l);
    document.getElementById("s").value = m;

    var w = document.getElementById("s").value;
    var x = document.getElementById("sr").value;
    var c = Number(w) - (Number(w) * Number(x));
    document.getElementById("stmr").value = c;

    var w = document.getElementById("s").value;
    var b = document.getElementById("ti").value;
    var n = Number(w) * Number(b);
    document.getElementById("tt").value = n;

    var c = document.getElementById("stmr").value;
    var n = document.getElementById("tt").value;
    var s = document.getElementById("fr").value;
    var v = Number(c) + Number(n) + Number(s);
    document.getElementById("so").value = v;
}

function reinitialiser()
{
    document.getElementById("desc1").value = "";
    document.getElementById("qty1").value = "";
    document.getElementById("price1").value = "";
    document.getElementById("desc2").value = "";
    document.getElementById("qty2").value = "";
    document.getElementById("price2").value = "";
    document.getElementById("desc3").value = "";
    document.getElementById("qty3").value = "";
    document.getElementById("price3").value = "";
    document.getElementById("desc4").value = "";
    document.getElementById("qty4").value = "";
    document.getElementById("price4").value = "";
    document.getElementById("desc5").value = "";
    document.getElementById("qty5").value = "";
    document.getElementById("price5").value = "";
    document.getElementById("s").value = "";
    document.getElementById("sr").value = "";
    document.getElementById("stmr").value = "";
    document.getElementById("ti").value = "";
    document.getElementById("tt").value = "";
    document.getElementById("fr").value = "";
    document.getElementById("so").value = "";
    document.getElementById("total1").value = "";
    document.getElementById("total2").value = "";
    document.getElementById("total3").value = "";
    document.getElementById("total4").value = "";
    document.getElementById("total5").value = "";
}

function ajouterLigne() {
    var newLi = document.getElementById("modeleLigne").cloneNote(true);
    var lastLi = document.getElementById("lastLigne");

}*/

function AjouterLigne() {

    const corpsTableau = document.getElementById("corps-tableau");
    const premiereLigne = document.getElementsByClassName("ligne-commande")[0];
    

    let nouvelleLigne = premiereLigne.cloneNode(true);
    

    let inputs = nouvelleLigne.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""; 
    }

    const pointInsertion = document.getElementById("point-insertion");
    corpsTableau.insertBefore(nouvelleLigne, pointInsertion);
}


function remplir() {
    const descriptions = ["Bureau", "Portable", "Ram 8go", "Clef usb 16go", "Souris", "Ecran 17 pouces"];
    

    const listeDesc = document.getElementsByClassName("desc");
    const listeQte = document.getElementsByClassName("qte");
    const listePrix = document.getElementsByClassName("prix");


    for (let i = 0; i < listeDesc.length; i++) {

        let randDescIndex = Math.floor(Math.random() * descriptions.length);
        listeDesc[i].value = descriptions[randDescIndex];


        listeQte[i].value = Math.floor(Math.random() * 10) + 1;


        listePrix[i].value = Math.floor(Math.random() * 100) + 1;
    }
}


function calculate() {

    const listeQte = document.getElementsByClassName("qte");
    const listePrix = document.getElementsByClassName("prix");
    const listeTotalLigne = document.getElementsByClassName("total1");

    let sousTotal = 0;


    for (let i = 0; i < listeQte.length; i++) {
   
        let qte = parseInt(listeQte[i].value);
        let prix = parseFloat(listePrix[i].value);

  
        if (isNaN(qte)) qte = 0;
        if (isNaN(prix)) prix = 0;

        let totalLigne = qte * prix;

        listeTotalLigne[i].value = totalLigne.toFixed(2);

        sousTotal += totalLigne;
    }


    let tauxRemise = parseFloat(document.getElementById("taux-remise").value); 
    let tauxImpot = parseFloat(document.getElementById("taux-impot").value);   
    let fraisExp = parseFloat(document.getElementById("frais-exped").value);

    if (isNaN(tauxRemise)) tauxRemise = 0;
    if (isNaN(tauxImpot)) tauxImpot = 0;
    if (isNaN(fraisExp)) fraisExp = 0;

 
    
 
    document.getElementById("res-sous-total").innerText = sousTotal.toFixed(2);

  
    let montantRemise = sousTotal * tauxRemise;
    let sousTotalRemise = sousTotal - montantRemise;
    document.getElementById("res-sous-total-remise").innerText = sousTotalRemise.toFixed(2);


    let taxeTotale = sousTotal * tauxImpot; 
    document.getElementById("res-taxe").innerText = taxeTotale.toFixed(2);

   
    let solde = sousTotalRemise + taxeTotale + fraisExp;

  
    document.getElementById("res-solde").innerText = solde.toFixed(2);
}

function supprimer()
{
    document.getElementById("desc").value = "";
    document.getElementById("qte").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("total1").value = "";
    document.getElementById("taux-remise").value = "";
    document.getElementById("taux-impot").value = "";
    document.getElementById("taux-impot").value = "";
    document.getElementById("frais-exped").value = "";
    document.getElementById("res-sous-total-remise").value = "";
    document.getElementById("res-taxe").value = "";
    document.getElementById("res-solde").value = "";
}