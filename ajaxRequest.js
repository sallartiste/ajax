//creation  de l'objet XHR
function getXhr(){
    var xhr = null;
    if(window.XMLHttpRequest){ //Pour firefox et autres
        xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject){// pour l'internet explorer
        try{// deux activeX possible selon les version
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }else{//Au cas ou XMLHttpRequest n'est pas  supporter par les navigateur
        alert("Votre navigateur ne supporte pas les objets XMLHttpRequest...");
        xhr = false;
    }
    return xhr;
}


//exemple
function go(){
    var xhr = getXhr();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            alert(xhr.responseText);
        }
    }
    xhr.open("GET", "ajax.php",true);
    xhr.send(null);
}

//exemple simple
function lorem(){
    var loremXhr = getXhr();
    loremXhr.onreadystatechange = function(){
        if(loremXhr.readyState == 4 && loremXhr.status == 200){
            document.getElementById("root").innerHTML = loremXhr.responseText;
        }
    }
    loremXhr.open("GET","lorem.txt", true);
    loremXhr.send(null);
}
