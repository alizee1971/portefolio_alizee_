function moyenne(){
    var n1= prompt("Donner la première note:");
    var n2= prompt("Donner la deuxième note:");
    var n3= prompt("Donner la troisièeme note:");

    var somme = Number(n1) + Number(n2) + Number(n3);

        var moyenne = somme/3;
        document.write("Voici la moyenne:" + moyenne + "<br>" );

        if (moyenne < 10){
            document.write("Redoublant");
        }
        else if (moyenne < 12){
            document.write("Admis - Passable");
        }
        else if (moyenne < 14){
            document.write("Admis - Bien");
        }
        else {
            document.write("Admis - Très bien");
        }
        document.write("<br>" + "<br>" + '<a href="instructionsconditionnelles.html">Retourner à l\'index</a>');
}

function temperature(){
    var temperature= prompt("Saisie une Température en °C");

    var temperatures = Number(temperature);

    if (temperatures < 10){
        document.write("Froid");
    }
    else if (temperatures < 25){
        document.write("Normal");
    }
    else {
        document.write("Chaud");
    }
    document.write("<br>" + "<br>" + '<a href="instructionsconditionnelles.html"> Retourner à lIndex</a>');

}

function comparaison_de_deux_nombres(){
    var n4= prompt("Saisir un nombre");
    var n5= prompt("Saisir un nombre");

    
    if (n4<n5) {
    document.write(n4 + " < " + n5);    }

    else if  (n5<n4) {
        document.write(n5 + " < " + n4);

    }
    else { (n4=n5)

    document.write(n4 + " = " +n5);

    }
    document.write("<br>" + "<br>" + '<a href="instructionsconditionnelles.html">Retourner à l\'index</a>');

}

function jeu_de_devinette() {
    var chiffresecret = Math.floor(Math.random() * 20) + 1;

    var n1 = prompt("donner un nombre entre 1 et 20");

if (n1 < chiffresecret) {
alert("Votre chiffre est inférieur")
alert("Votre chiffre :"+" " + n1 + " , " + "La réponse :" + " " + chiffresecret)


}

else if (n1 > chiffresecret) {
    alert("Votre chiffre est supérieur")
    alert("Votre chiffre :"+" " + n1 + " , "  + "La réponse :" + " " + chiffresecret)   
    }

 else if (n1 == chiffresecret){
    alert(" Félicitations ! Vous avez trouvé le chiffre : " + chiffreSecret);
  }

}
