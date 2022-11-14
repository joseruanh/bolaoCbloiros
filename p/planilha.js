function verPontos(){
    let ruanh = 5;
    let jean = 4;
    let pickles = 3;
    let relampago = 3;
    let kennyd = 3;
    let tony = 2;
    let brener = 1;
    let ademiro = 1;

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