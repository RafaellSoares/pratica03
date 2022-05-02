let NovaJanela;

function abrirJanela(){
    NovaJanela = window.open("", "NovaJanela", "width=200, height=200");
    NovaJanela.document.write("<p>Uma nova janela foi criada</p>");

}

function fecharJanela(){
    NovaJanela.close();
}