function sala(){
    var estado_sala = document.getElementById("estado_sala").innerHTML;
    document.getElementById("estado_sala").innerHTML="0";
    document.getElementById("sala").innerHTML="<div class='sala_desligado'></div>";
    document.getElementById("botao-sala").innerHTML="<button onclick='ligar_sala()' class='botao'>Liga</button>";
    if( estado_sala == 1 ){
        window.history.replaceState('', '', '/?desligar_sala');
        $.get("/?desligar_sala").done(function(data){});
    }
}
function ligar_sala(){
    document.getElementById("estado_sala").innerHTML="1";
    document.getElementById("sala").innerHTML="<div class='sala_ligado'></div>";
    document.getElementById("botao-sala").innerHTML="<button onclick='sala()' class='botao'>Desligar</button>";

    window.history.replaceState('', '', '/?ligar_sala');
    $.get("/?ligar_sala").done(function(data){});
}

function banheiro1(){
    var estado_banheiro1 = document.getElementById("estado_banheiro1").innerHTML;
    document.getElementById("estado_banheiro1").innerHTML="0";
    document.getElementById("banheiro1").innerHTML="<div class='banheiro1_desligado'></div>";
    document.getElementById("botao-banheiro1").innerHTML="<button onclick='ligar_banheiro1()' class='botao'>Liga</button>";
    if( estado_banheiro1 == 1 ){
        window.history.replaceState('', '', '/?desligar_banheiro1');
        $.get("/?desligar_banheiro1").done(function(data){});
    }
}

function ligar_banheiro1(){   
        document.getElementById("estado_banheiro1").innerHTML="1";
        document.getElementById("banheiro1").innerHTML="<div class='banheiro1_ligado'></div>";
        document.getElementById("botao-banheiro1").innerHTML="<a href='/?desligar_banheiro1' class='botao'>Desliga</a>";
        
        window.history.replaceState('', '', '/?ligar_banheiro1');
        $.get("/?ligar_banheiro1").done(function(data){});
    } 

function quarto1(){
        var estado_quarto1 = document.getElementById("estado_quarto1").innerHTML;
        document.getElementById("estado_quarto1").innerHTML="0";
        document.getElementById("quarto1").innerHTML="<div class='quarto1_desligado'></div>";
        document.getElementById("botao-quarto1").innerHTML="<button onclick='ligar_quarto1()' class='botao'>Liga</button>";
        if( estado_quarto1 == 1 ){
            window.history.replaceState('', '', '/?desligar_quarto1');
            $.get("/?desligar_quarto1").done(function(data){});
        }
    }
    
function ligar_quarto1(){   
            document.getElementById("estado_quarto1").innerHTML="1";
            document.getElementById("quarto1").innerHTML="<div class='quarto1_ligado'></div>";
            document.getElementById("botao-quarto1").innerHTML="<a href='/?desligar_quarto1' class='botao'>Desliga</a>";
            
            window.history.replaceState('', '', '/?ligar_quarto1');
            $.get("/?ligar_quarto1").done(function(data){});
        }     

function jardim(){
            var estado_jardim = document.getElementById("estado_jardim").innerHTML;
            document.getElementById("estado_jardim").innerHTML="0";
            document.getElementById("jardim").innerHTML="<div class='jardim_desligado'></div>";
            document.getElementById("botao-jardim").innerHTML="<button onclick='ligar_jardim()' class='botao'>Liga</button>";
            if( estado_jardim == 1 ){
                window.history.replaceState('', '', '/?desligar_jardim');
                $.get("/?desligar_jardim").done(function(data){});
            }
        }
        
function ligar_jardim(){   
                document.getElementById("estado_jardim").innerHTML="1";
                document.getElementById("jardim").innerHTML="<div class='jardim_ligado'></div>";
                document.getElementById("botao-jardim").innerHTML="<a href='/?desligar_jardim' class='botao'>Desliga</a>";
                
                window.history.replaceState('', '', '/?ligar_jardim');
                $.get("/?ligar_jardim").done(function(data){});
            }

function quarto_banheiro2(){
                var estado_quarto_banheiro2 = document.getElementById("estado_quarto_banheiro2").innerHTML;
                document.getElementById("estado_quarto_banheiro2").innerHTML="0";
                document.getElementById("quarto_banheiro2").innerHTML="<div class='quarto-banheiro2_desligado'></div>";
                document.getElementById("botao-quarto-banheiro2").innerHTML="<button onclick='ligar_quarto_banheiro2()' class='botao'>Liga</button>";
                if( estado_quarto_banheiro2 == 1 ){
                    window.history.replaceState('', '', '/?desligar_quarto_banheiro2');
                    $.get("/?desligar_quarto_banheiro2").done(function(data){});
                }
            }
            
function ligar_quarto_banheiro2(){   
                    document.getElementById("estado_quarto_banheiro2").innerHTML="1";
                    document.getElementById("quarto_banheiro2").innerHTML="<div class='quarto-banheiro2_ligado'></div>";
                    document.getElementById("botao-quarto-banheiro2").innerHTML="<a href='/?desligar_quarto_banheiro2' class='botao'>Desliga</a>";
                    
                    window.history.replaceState('', '', '/?ligar_quarto_banheiro2');
                    $.get("/?ligar_quarto_banheiro2").done(function(data){});
                }            

function portao(){
                    var estado_portao = document.getElementById("estado_portao").innerHTML;
                    document.getElementById("estado_portao").innerHTML="0";
                    //document.getElementById("portao").innerHTML="<div class='portao_desligado'></div>";
                    document.getElementById("botao-portao").innerHTML="<button onclick='abrir_portao()' class='botao'>Abrir</button>";
                    if( estado_portao == 1 ){
                        window.history.replaceState('', '', '/?fechar_portao');
                        $.get("/?fechar_portao").done(function(data){});
                    }
                }
                
function abrir_portao(){   
                        document.getElementById("estado_portao").innerHTML="1";
                        //document.getElementById("portao").innerHTML="<div class='portao_ligado'></div>";
                        document.getElementById("botao-portao").innerHTML="<a href='/?desligar_portao' class='botao'>Fechar</a>";
                        
                        window.history.replaceState('', '', '/?abrir_portao');
                        $.get("/?abrir_portao").done(function(data){});
                    }
