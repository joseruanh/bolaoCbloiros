    function verPontos(){
    let ruanh = 53;
    let jean = 48;
    let pickles = 50;
    let relampago = 47;
    let kennyd = 5;
    let tony = 44;
    let brener = 42;
    let ademiro = 46;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p>             
                    Ruanh: ${ruanh} <br>
                    Pickles: ${pickles} <br> 
                    Jean: ${jean} <br>  
                    Marcos: ${relampago} <br>                   
                    Ademiro: ${ademiro} <br>
                    Tony: ${tony} <br> 
                    Brener: ${brener} <br>
                    Pedro: 29 <br>                    
                    Victor: 24 <br>
                    Kennyd: ${kennyd} <br>

                    <br><br>

                    obs: os pontos são calculados automaticamente
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