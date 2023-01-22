    function verPontos(){
    let ruanh = 4;
    let jean = 4;
    let pickles = 3;
    let relampago = 5;
    let kennyd = 4;
    let tony = 5;
    let brener = 3;
    let ademiro = 5;

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