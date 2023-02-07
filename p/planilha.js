    function verPontos(){
    let ruanh = 13;
    let jean = 17;
    let pickles = 14;
    let relampago = 12;
    let kennyd = 5;
    let tony = 7;
    let brener = 13;
    let ademiro = 15;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p> 
                    Jean: ${jean} <br>                   
                    Ademiro: ${ademiro} <br>  
                    Pickles: ${pickles} <br>
                    Ruanh: ${ruanh} <br>
                    Brener: ${brener} <br>  
                    Marcos: ${relampago} <br>
                    Tony: ${tony} <br>
                    Kennyd: ${kennyd} <br>
                    <br><br>
                </p>
    `
}

function subir()
{
    window.scrollTo(0, 0);
}

function descer()
{
    window.scrollTo(0, document.body.scrollHeight);
}

function aviso(){
    window.alert("em breve")
}