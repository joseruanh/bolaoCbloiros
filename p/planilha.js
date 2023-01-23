    function verPontos(){
    let ruanh = 4;
    let jean = 5;
    let pickles = 4;
    let relampago = 5;
    let kennyd = 4;
    let tony = 5;
    let brener = 4;
    let ademiro = 5;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p> 
                    Marcos: ${relampago} <br>
                    Jean: ${jean} <br>
                    Ademiro: ${ademiro} <br>
                    Tony: ${tony} <br>
                    Ruanh: ${ruanh} <br>
                    Kennyd: ${kennyd} <br>
                    Pickles: ${pickles} <br>
                    Brener: ${brener} <br>
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