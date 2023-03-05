    function verPontos(){
    let ruanh = 38;
    let jean = 35;
    let pickles = 35;
    let relampago = 31;
    let kennyd = 5;
    let tony = 29;
    let brener = 32;
    let ademiro = 32;

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
                    Pedro: 19 <br>                    
                    Victor: 16 <br>
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