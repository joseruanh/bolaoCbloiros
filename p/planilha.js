    function verPontos(){
    let ruanh = 33;
    let jean = 31;
    let pickles = 30;
    let relampago = 26;
    let kennyd = 5;
    let tony = 23;
    let brener = 27;
    let ademiro = 28;

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
                    Victor: 14 <br>
                    Pedro: 14 <br>
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