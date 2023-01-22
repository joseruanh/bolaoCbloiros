    function verPontos(){
    let ruanh = 3;
    let jean = 3;
    let pickles = 2;
    let relampago = 4;
    let kennyd = 3;
    let tony = 4;
    let brener = 2;
    let ademiro = 4;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p> 
                    Marcos: ${relampago} <br>
                    Ademiro: ${ademiro} <br>
                    Tony: ${tony} <br>
                    Ruanh: ${ruanh} <br>
                    Jean: ${jean} <br>
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