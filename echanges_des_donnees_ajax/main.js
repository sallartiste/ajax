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
            document.getElementById("root").innerHTML = leXhr.responseText;
            //alert(leXhr.responseText);
        }
    }
    leXhr.open('GET', "texte.txt", true);
    leXhr.send(null);
}
