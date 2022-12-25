function verPontos(){
    let ruanh = 0;
    let jean = 0;
    let pickles = 0;
    let relampago = 0;
    let kennyd = 0;
    let tony = 0;
    let brener = 0;
    let ademiro = 0;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p> Ruanh: ${ruanh} <br>
                    Jean: ${jean} <br>
                    Pickles: ${pickles} <br>
                    Relâmpago: ${relampago} <br>
                    Kennyd: ${kennyd} <br>
                    Tony: ${tony} <br>
                    Brener: ${brener} <br>
                    Ademiro: ${ademiro} <br>
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