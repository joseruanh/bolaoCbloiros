    function verPontos(){
    let ruanh = 8;
    let jean = 12;
    let pickles = 9;
    let relampago = 8;
    let kennyd = 5;
    let tony = 7;
    let brener = 10;
    let ademiro = 8;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p> 
                    Jean: ${jean} <br>
                    Brener: ${brener} <br>  
                    Pickles: ${pickles} <br>  
                    Marcos: ${relampago} <br>                   
                    Ademiro: ${ademiro} <br>
                    Ruanh: ${ruanh} <br>
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