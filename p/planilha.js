    function verPontos(){
    let ruanh = 18;
    let jean = 20;
    let pickles = 17;
    let relampago = 15;
    let kennyd = 5;
    let tony = 11;
    let brener = 15;
    let ademiro = 19;

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