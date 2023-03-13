    function verPontos(){
    let ruanh = 49;
    let jean = 43;
    let pickles = 45;
    let relampago = 41;
    let kennyd = 5;
    let tony = 40;
    let brener = 37;
    let ademiro = 41;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p>             
                    Ruanh: ${ruanh} <br> 
                    Jean: ${jean} <br>
                    Pickles: ${pickles} <br>                   
                    Ademiro: ${ademiro} <br> 
                    Brener: ${brener} <br>  
                    Marcos: ${relampago} <br>
                    Tony: ${tony} <br>
                    Pedro: 25 <br>                    
                    Victor: 19 <br>
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