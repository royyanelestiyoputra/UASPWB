function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            myFunction(this);
        }
    };
    xhttp.open("GET", "katalog.xml", true);
    xhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>KECAMATAN</th><th>KODEPOS</th><th>DESA</th></tr>";
    var x = xmlDoc.getElementsByTagName("DAFTAR");
    for (i = 0; i < x.length; i++) 
    { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("KECAMATAN")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("KODEPOS")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("DESA")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }
  