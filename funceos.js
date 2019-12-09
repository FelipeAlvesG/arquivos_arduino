function sala(){
	var estado_sala = document.getElementById("estado_sala").value;
    if(estado_sala === 0){
        document.getElementById("estado_sala").value=0;
        document.getElementById("sala").innerHTML="<div class='sala_ligado'></div>";
        document.getElementById("botao-sala").innerHTML="<a href='/?desligar_sala' class='botao'>Desliga</a>";
	    
    } else {
        document.getElementById("estado_sala").value=1;
        document.getElementById("sala").innerHTML="<div class='sala_desligado'></div>";
        document.getElementById("botao-sala").innerHTML="<a href='/?ligar_sala' class='botao'>Liga</a>";
	    
    }
}	

function banheiro1(){
    var estado_banheiro1 = document.getElementById("estado_banheiro1").innerHTML;
    if(estado_banheiro1 === "0"){
        document.getElementById("estado_banheiro1").innerHTML="1";
        document.getElementById("banheiro1").innerHTML="<div class='banheiro1_ligado'></div>";
		document.getElementById("botao-banheiro1").innerHTML="<a href='/?desligar_banheiro1' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado_banheiro1").innerHTML="0";
        document.getElementById("banheiro1").innerHTML="<div class='banheiro1_desligado'></div>";
        document.getElementById("botao-banheiro1").innerHTML="<a href='/?ligar_banheiro1' class='botao'>Liga</a>";
    }
}

function quarto1(){
    var estado_quarto1 = document.getElementById("estado_quarto1").innerHTML;
    if(estado_quarto1 === "0"){
        document.getElementById("estado_quarto1").innerHTML="1";
        document.getElementById("quarto1").innerHTML="<div class='quarto1_ligado'></div>";
		document.getElementById("botao-quarto1").innerHTML="<a href='/?desligar_quarto1' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado_quarto1").innerHTML="0";
        document.getElementById("quarto1").innerHTML="<div class='quarto1_desligado'></div>";
        document.getElementById("botao-quarto1").innerHTML="<a href='/?ligar_quarto1' class='botao'>Liga</a>";
    }
}

function jardim(){
    var estado_jardim = document.getElementById("estado_jardim").innerHTML;
    if(estado_jardim === "0"){
        document.getElementById("estado_jardim").innerHTML="1";
        document.getElementById("jardim").innerHTML="<div class='jardim_ligado'></div>";
		document.getElementById("botao-jardim").innerHTML="<a href='/?desligar_jardim' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado_jardim").innerHTML="0";
        document.getElementById("jardim").innerHTML="<div class='jardim_desligado'></div>";
        document.getElementById("botao-jardim").innerHTML="<a href='/?ligar_jardim' class='botao'>Liga</a>";
    }
}
function quarto_banheiro2(){
    var estado_quarto_banheiro2 = document.getElementById("estado_quarto_banheiro2").innerHTML;
    if(estado_quarto_banheiro2 === "0"){
        document.getElementById("estado_quarto_banheiro2").innerHTML="1";
        document.getElementById("quarto_banheiro2").innerHTML="<div class='quarto-banheiro2_ligado'></div>";
		document.getElementById("botao-quarto-banheiro2").innerHTML="<a href='/?desligar_quarto_banheiro2' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado_quarto_banheiro2").innerHTML="0";
        document.getElementById("quarto_banheiro2").innerHTML="<div class='quarto-banheiro2_desligado'></div>";
        document.getElementById("botao-quarto-banheiro2").innerHTML="<a href='/?ligar_quarto_banheiro2' class='botao'>Liga</a>";
    }
}

function portao(){
    var estado_portao = document.getElementById("estado_portao").innerHTML;
    if(estado_portao === "0"){
        document.getElementById("estado_portao").innerHTML="1";
        // document.getElementById("portao").innerHTML="<div class='rele2_ligado'></div>";
		document.getElementById("botao-portao").innerHTML="<a href='/?fechar_portao' class='botao'>Fechar</a>";
    } else {
        document.getElementById("estado_portao").innerHTML="0";
        // document.getElementById("portao").innerHTML="<div class='rele2_desligado'></div>";
        document.getElementById("botao-portao").innerHTML="<a href='/?abrir_portao' class='botao'>Abrir</a>";
    }
}
