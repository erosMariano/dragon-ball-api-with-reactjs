import React, {useState, useEffect} from 'react'
import myJson from '../data/products';
import "../assets/main.css";



function Main() {
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
        <div className="main">
            <div className="container_imagem_logo">
                <img src="/images/Logo-DB.png"/>
            </div>

            <div className="input">
                <label><img src="/images/icons/Search.svg"/></label>
                <input type="text" placeholder="Digite o nome do personagem" onChange={(event) =>handleSearch(event) } />
            </div>
            
            <div className="nomes">
                {filteredData.map((value,index)=>{ 
                return(
                <div key={value.id}>
                    <div className="box-nome">
                        {value.name}
                    </div>
                </div>
                )
                })}
            </div>


            <div className="box1">
                {filteredData.map((value,index)=>{ 
                return(
                <div key={value.id}>
                    <div className="box">
                        <div style={{display:"flex", alignItems:"center"}}>
                            <div className="imagem-container" style={{backgroundImage: `url(${value.img})`}}>
    
                            </div>

                            <div className="description">
                                <h2>{value.name}</h2>
                                <p>{value.bio}</p>
                            </div>
                        </div>

                        <div className="atributes">
                            <p><span className="bold">Race: </span>{value.race}</p>
                            <p><span className="bold">Gender: </span>{value.gender}</p>
                        </div>
                    </div>
                </div>
                )
                })}
            </div>
        </div>
        


        
    )
}

export default Main
