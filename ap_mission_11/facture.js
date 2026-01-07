function resultat()
{
    var k = document.getElementById("t1").value;
    var l = document.getElementById("t2").value;
    var m = Number(k) * Number(l);
    document.getElementById("t3").value = m;
    
    var a = document.getElementById("t4").value;
    var b = document.getElementById("t5").value;
    var c = Number(a) * Number(b);
    document.getElementById("t6").value = c;

    var d = document.getElementById("t7").value;
    var e = document.getElementById("t8").value;
    var f = Number(d) * Number(e);
    document.getElementById("t9").value = f;

    var g = document.getElementById("t9").value;
    var h = document.getElementById("t6").value;
    var i = document.getElementById("t3").value;
    var j = Number(g) + Number(h) + Number(i);
    document.getElementById("t10").value = j;
}

function reinitialiser()
{
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
    document.getElementById("t5").value = "";
    document.getElementById("t6").value = "";
    document.getElementById("t7").value = "";
    document.getElementById("t8").value = "";
    document.getElementById("t9").value = "";
    document.getElementById("t10").value = "";
}