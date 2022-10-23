    var nomeUtente = window.prompt("inserisci nome utente");
    document.getElementById("nomeUtente").innerHTML = "BENVENUTO "+ nomeUtente;
    var sceltaUtente;
    function cliccatoCarta(){
        sceltaUtente= "carta";
        alert (nomeUtente  + " hai scelto " + sceltaUtente);
    };
    function cliccatoSasso () {
        sceltaUtente = "sasso";
        alert ( nomeUtente + " hai scelto " + sceltaUtente);
    };
    function cliccatoForbici () {
        sceltaUtente = "forbici";
        alert ( nomeUtente + " hai scelto " + sceltaUtente);
    };

   function verdetto (){
    document.getElementById("carta").style.display ="none";
    document.getElementById("sasso").style.display ="none";
    document.getElementById("forbici").style.display ="none";
    document.getElementById("conferma").style.display ="none";
    var sceltaComputer;
    if (sceltaUtente == "carta"){
        sceltaComputer = "forbici";
    }
    if (sceltaUtente == "forbici"){
        sceltaComputer = "sasso";
    }
    if (sceltaUtente == "sasso"){
        sceltaComputer = "carta";
    }
    document.getElementById("nomeUtente").innerHTML = nomeUtente + " HAI PERSO MUHAHHA ";
    document.getElementById("secondoTitolo").innerHTML = " il computer ha scelto " + sceltaComputer + " tu, hai scelto " +
    sceltaUtente;
}

