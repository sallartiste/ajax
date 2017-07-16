function getXhr(){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else if (window.ActiveXObject) {
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }else{
        alert("Votre navigateur ne  supporte pas de l'AJAX");
        xhr = false;
    }
    return xhr;
}

function go(){
    var leXhr = getXhr();
    leXhr.onreadystatechange = function(){
        if(leXhr.readyState == 4){
            var Jstext = JSON.parse(leXhr.responseText);
            document.getElementById("root").innerHTML = Jstext.email.subject;

            //alert(leXhr.responseText);
        }
    }
    //leXhr.open('GET', "texte.txt", true);
    leXhr.open("GET", "popo.json", true);
    leXhr.send(null);
}


    var xhrApi = getXhr();
    xhrApi.onreadystatechange = function(){
        if(xhrApi.readyState == 4){
            var pooApi = JSON.parse(xhrApi.responseText);
            document.getElementById("api").innerHTML = pooApi.time;
        }
    }
    xhrApi.open("GET", "http://time.jsontest.com/", true);
    xhrApi.send();
