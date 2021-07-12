import React, {useState, useEffect, useContext} from 'react'
import "../assets/rightBar.css"
import myJson from '../data/products';


function RightBarApp({ filtroApp }) {


    function teste(){
        let testeApp;
        let testeApp2 = []

        if(filtroApp === undefined){
            testeApp2 = [myJson[5]]
            testeApp = testeApp2
        }else{

            if(filtroApp.length <=0){
                testeApp = [myJson[5]]
                return testeApp
            }
            testeApp = filtroApp
            if(filtroApp === undefined){
                filtroApp = [myJson[5]]
            }
        }
        return testeApp
    }
    
    const personagem = teste();
    
    return (
        <div>
            <div className="rightBar">
                        <div className="imagem-maior">
                        <div className="imagem-container"  style={{backgroundImage: `url(${ personagem[0].img || myJson[0].img})`}}></div>

                        <h2>{personagem[0].name || "Goku"}</h2>
                        </div>



                        <div className="informartion">
                        <h3>Sobre</h3>
                        <p>
                            {
                                personagem[0].bio || 
                                "Goku, nascido Kakarot, é um Saiyan masculino e o principal protagonista da série Dragon Ball. Goku é um Saiyan originalmente enviado à Terra como uma criança com a missão de destruir seu povo. No entanto, um acidente altera sua memória, permitindo-lhe crescer e se tornar o maior defensor da Terra e o líder informal da Equipe Dragão. Ele constantemente se esforça e treina pa           ra ser o maior guerreiro possível, o que manteve a Terra e o universo a salvo da destruição muitas vezes."
                            }
                        </p>
                        <h3>Habilidades</h3>


                            <ul>
                                {
                                    personagem[0].abilities ||
                                    "Ataque: 50.000 <br> Defesa: 50.000 <br> Velocidade de restauração KI: 50.000"
                                }
                            </ul>
                        </div>
                    </div>
        </div>

    )
}

export default RightBarApp
