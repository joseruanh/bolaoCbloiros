    function verPontos(){
    let ruanh = 36;
    let jean = 34;
    let pickles = 34;
    let relampago = 29;
    let kennyd = 5;
    let tony = 27;
    let brener = 31;
    let ademiro = 31;

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
                    Pedro: 18 <br>                    
                    Victor: 14 <br>
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