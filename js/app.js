let NovaJanela;

function abrirJanela(){
    NovaJanela = window.open("", "NovaJanela", "width=200, height=200");
    NovaJanela.document.write("<p>Uma nova janela foi criada</p>");

}

function fecharJanela(){
    NovaJanela.close();
}

function nomeNav(){
    alert(navigator.userAgent)
}

function Propriedades(){
    //alert("Total width/height :" + screen.width + "x" + screen.height)
    //alert("Disponivel width/height :" + screen.availWidth + "x" + screen.availHeight)
    //alert("Profunidade de cores :" + screen.colorDepth)
    //alert("pixel cores :" + screen.pixelDepth)
    history.back()
}
