import React, {useState, useEffect} from 'react'
import "../assets/rightBar.css"
import myJson from '../data/products';



function RightBarApp() {


    const [allData, setAllData] = useState([])
    const [filteredData, setFilteredData] = useState(allData);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];

        result = allData.filter((data) => {
            return data.id.search(value) != -1;
        });

            setFilteredData(result);
        }

    useEffect(() =>{
        setAllData(myJson)
        setFilteredData(myJson)
    }, [])

    return (
        <div>
            {filteredData.map((value,index) =>{
                return(
                    <div class="rightBar">
                        <div className="imagem-maior">
                        <div className="imagem-container" style={{backgroundImage: `url(${ value.img || myJson[0].img})`}}></div>

                        <h2>{value.name || "Goku"}</h2>
                        </div>



                        <div className="informartion">
                        <h3>Sobre</h3>
                        <p>
                            {
                                value.bio || 
                                "Goku, nascido Kakarot, é um Saiyan masculino e o principal protagonista da série Dragon Ball. Goku é um Saiyan originalmente enviado à Terra como uma criança com a missão de destruir seu povo. No entanto, um acidente altera sua memória, permitindo-lhe crescer e se tornar o maior defensor da Terra e o líder informal da Equipe Dragão. Ele constantemente se esforça e treina pa           ra ser o maior guerreiro possível, o que manteve a Terra e o universo a salvo da destruição muitas vezes."
                            }
                        </p>
                        <h3>Habilidades</h3>


                            <ul>
                                {
                                    value.abilities ||
                                    "Ataque: 50.000 <br> Defesa: 50.000 <br> Velocidade de restauração KI: 50.000"
                                }
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default RightBarApp
