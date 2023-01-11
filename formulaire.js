function afficher() {
    alert("Bonjour");
}

function OriginalText() {
    var adulte = 0;
    var enfant = 0;
    var chambre = 0;
    document.getElementById("adulte").value=adulte;
    document.getElementById("enfant").value=enfant;
    document.getElementById("chambre").value=chambre;
}

function augmenterVal(para) {
   var valeur = parseInt(document.getElementById(para).value) + 1;
   document.getElementById(para).value = valeur;
   var ctab = document.getElementById("table");
   if (para == "enfant") {
   if (valeur > 0) {
        var tr = document.createElement("tr");
        var td =document.createElement ("td");
        var input = document.createElement("input");
        input.type = "text";
        td.appendChild(input);
        tr.appendChild(td);
        document.getElementById("table").appendChild(tr);
   }    
}    
}

function diminuerVal(para) {
    if (parseInt(document.getElementById(para).value) < 0)
        document.getElementById(para).value = 0;
    else
        document.getElementById(para).value -= 1;
}

function verifierDate(para1, para2) {
    //alert(para1.value);
    if (para1.value < para2.value) {
        alert("Attention, vos dates sont erronées");
    }
}