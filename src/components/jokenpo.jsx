import React from 'react'
import './jokenpo.css'

var vitoriasUs = 0;
var vitoriasPc = 0;
var empates = 0; 
var resultado = "";

function jogar(){

    var element = document.querySelector(".selectObj");    
    var valorSelUs = element.options[element.selectedIndex].value;
    var valorSelPc = "";
    var imgUs = document.querySelector(".imgUs");
    var imgPc = document.querySelector(".imgPc");
    var exibirResultado = document.querySelector(".resultado");
   

    switch(valorSelUs){
        case "pedra":
            imgUs.src = "/public/images/pedra.png";
            break;
        case "papel":
            imgUs.src = "/public/images/papel.png";
            break;
        case "tesoura":
            imgUs.src = "/public/images/tesoura.png";
            break;
        default:
            console.log("Sem opção selecionada");
            break;
    }

    var objPc = Math.floor(Math.random() * 3);
    switch(objPc){
        case 0:
            valorSelPc = "pedra";
            imgPc.src = "/public/images/pedra.png";
            break;
        case 1:
            valorSelPc = "papel";
            imgPc.src = "/public/images/papel.png";
            break;
        case 2:
            valorSelPc = "tesoura";
            imgPc.src = "/public/images/tesoura.png";
            break;
        default:
            console.log("Sem opção selecionada");
            break;
    }

    if(valorSelUs === valorSelPc){
        resultado = "Empate!";
        empates++;

    } else if(valorSelUs === "pedra" && valorSelPc === "tesoura" || valorSelUs === "papel" && valorSelPc === "pedra" || valorSelUs === "tesoura" && valorSelPc === "papel"){
        resultado = "Você Ganhou!";
        vitoriasUs++;

    } else{
        resultado = "Você Perdeu!";
        vitoriasPc++;
    }        

    console.log(resultado)
    exibirResultado.innerHTML = resultado;

}
function exibirPlacar(){

    var pontUs = document.querySelector(".pontUs");
    var pontPc = document.querySelector(".pontPc");
    var pontEmpates = document.querySelector(".pontEmpates");

    pontUs.textContent = vitoriasUs;
    pontPc.textContent = vitoriasPc;
    pontEmpates.textContent = empates;

    vitoriasUs = 0;
    vitoriasPc = 0;
    empates = 0

}

function Jokenpo(){
    return (
        <>
        <div className='container'>
            <h1>Jokenpô</h1>
            
            <div className='opcao'>
                <div className='selecao'>
                    <h3>Escolha:</h3>
                    <select className="selectObj" name="opcao" id="opcao">
                        <option value="pedra">Pedra</option>
                        <option value="papel">Papel</option>
                        <option value="tesoura">Tesoura</option>
                    </select>
                </div>
                <div>
                    <button onClick={jogar} className="btnJogar" style={{ borderRadius: '5px', border: '1px solid darkgreen', margin: '8px', padding: '10px', backgroundColor: 'green', width: '100px'}}>JOGAR</button>

                </div>
            </div> 

            <h3 className='resultado' style={{ Color: 'lightblue' }}></h3>

            <div className='escolhas'>
                <div className='escolhaUs' style={{ borderRadius: '5px', border: '1px solid #ccc', width: '200px', height: '22vh'}}>
                    <h5>VOCÊ ESCOLHEU</h5>
                    <img className="imgUs" src="" alt="" style={{ width: '150px' }}/>
                </div>
                <div className='escolhaPc' style={{ borderRadius: '5px', border: '1px solid #ccc', width: '200px', height: '22vh'}}>
                    <h5>A MÁQUINA ESCOLHEU</h5>
                    <img className="imgPc" src="" alt=""  style={{ width: '150px' }}/>
                </div>
            </div>

            <button className="btnFinalizar" onClick={exibirPlacar} style={{ borderRadius: '5px', border: '1px solid black', margin: '10px', padding: '10px', backgroundColor: '#a21d00', width: '140px'}}>FINALIZAR</button>
            
            <div className='placar' style={{ borderRadius: '7px', border: '1px solid #0000', margin: '30px', padding: '10px', backgroundColor: 'lightgray', color: 'black' }}>
                <h2 style={{ borderBottom: '2px solid black', paddingBottom: '3px' }}>PLACAR</h2>
                <div className='containerPontos'>
                    <div className='titulos'>
                        <h4>VOCÊ</h4>
                        <h4>COMPUTADOR</h4>
                        <h4>EMPATES</h4>
                    </div>
                    <div className='pontos'>
                        
                        <div className='usuario' style={{ borderRadius: '5px', border: '1px solid #ccc', margin: '8px', padding: '8px', backgroundColor: '#363636', color: 'lightgray', height: '6vh', width: '10vh'}}>
                            <h2 className='pontUs'></h2>
                        </div>
                        <div className='pc' style={{ borderRadius: '5px', border: '1px solid #ccc', margin: '10px', padding: '8px', backgroundColor: '#363636', color: 'lightgray', height: '6vh', width: '10vh'}}>
                            <h2 className='pontPc'></h2>
                        </div>
                        <div className='empates' style={{ borderRadius: '5px', border: '1px solid #ccc', margin: '8px', padding: '8px', backgroundColor: '#363636', color: 'lightgray', height: '6vh', width: '10vh'}}>
                            <h2 className='pontEmpates'></h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
          
        </>
      )
}
export default Jokenpo