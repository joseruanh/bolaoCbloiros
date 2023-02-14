    function verPontos(){
    let ruanh = 21;
    let jean = 22;
    let pickles = 20;
    let relampago = 17;
    let kennyd = 5;
    let tony = 15;
    let brener = 19;
    let ademiro = 21;

    let pontos = window.document.getElementById('pontos');
    pontos.innerHTML = `
    
    <p style="font-weight: bolder;">Total de pontos <br></p>
                <p> 
                    Jean: ${jean} <br>                   
                    Ademiro: ${ademiro} <br>
                    Ruanh: ${ruanh} <br>  
                    Pickles: ${pickles} <br>
                    Brener: ${brener} <br>  
                    Marcos: ${relampago} <br>
                    Tony: ${tony} <br>                    
                    Victor: 6 <br>
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