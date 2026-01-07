function affichagetab(){
    document.write("<table baorder=2px width=30%");
    for(let i=0; i<=2; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");

    }
    document.write("</table>");
}
function affichagetab2(){
    var X=prompt("Combien de ligne?");
    document.write("<table border=2px width=30%");
    for(let i=1; i<=X; i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");

    }
    document.write("</table>")
}
function seconnecter(){
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")
    {document.write("Bienvenue :"+login);}
    else{alert("Accès refusé")}
}
function cdc(){
    var chaine=prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient    " +chaine.length+" caracteres"+"<br>");
    document.write("La première lettre est "+chaine.substr(0,1)+"<br>");
}
function seconnecter2(){
window.location.href="identification.html"
}

function seconnecter3(){
    var i = 0;
    do{
        var id = prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");
        if (id == "admin" && mdp == "admin"){
            document.write("Bienvenue" + "" + "" +id);
            break;
        } else alert ("Accès refusé");
        i= i+1;
    } while (i<3);

    if (i == 3) alert("Délai dépassé");
}

function ajouter(){
window.location.href="rajout.html"
} 

function addLigne(){
    var name = document.getElementById("nom").value;
    var age = document.getElementById("age").value;
    var prenom = document.getElementById("prenom").value;
    
    if (name == "" || age == "" || prenom == ""){
        alert("Un des deux éléments n'est pas complet ou valide")
    }else if (age < 10 || age > 20){
        alert("L'âge n'est pas validé");
    }
    else{
        var table = document.getElementById("myTable");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = name;
        cell2.innerHTML = prenom;
            cell3.innerHTML = age;
    }


}

function login(){
    var login=document.getElementById("t1").value;
    var mdp=document.getElementById("t2").value;
    if (login=="admin" && mdp=="admin"){
        window.location.href="yes.html"
    }
else {
    window.location.href="non.html"
}
}
function annuler() {
    document.getElementById("nom").value="";
    document.getElementById("mdp").value="";
}