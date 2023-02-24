    function verPontos(){
    let ruanh = 26;
    let jean = 25;
    let pickles = 23;
    let relampago = 20;
    let kennyd = 5;
    let tony = 17;
    let brener = 23;
    let ademiro = 24;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p>             
                    Ruanh: ${ruanh} <br> 
                    Jean: ${jean} <br>                   
                    Ademiro: ${ademiro} <br> 
                    Pickles: ${pickles} <br>
                    Brener: ${brener} <br>  
                    Marcos: ${relampago} <br>
                    Tony: ${tony} <br>                    
                    Victor: 11 <br>
                    Pedro: 8 <br>
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