import { useState } from "react";
import { data } from "./data";
import Button from "./Button"
function Shop(){
    const[wine,setWine] = useState(data);
    const[showDescr,setShowDescr] = useState(false)

    const showDescription = (element) =>{
        element.showMore = !element.showMore;
        setShowDescr(!showDescr)
    }
    const chooseWine = (searchTerm) =>{
        const newWine = data.filter(element=>element.searchTerm === searchTerm);
        setWine(newWine);
    }
    const removeElement = (id) => {
        let newWines = wine.filter(wines => wines.id !== id);
        setWine(newWines)
        console.log(wine)
    }
    
    return(
        <div>
            
            <div>
                <Button chosenWine={chooseWine}/>
            </div>
        <div className="list">
            {wine.map((element =>{
                const{id,name,image,description,price,showMore} = element;
                return(<div key={id} className="product-list">
                    <img src={image} alt="wine" height="300px"/>
                    <h4 className="called">{name}</h4>
                    <p className="price">$ {price}</p>
                    <p className="point">{showMore ? description :description.substring(0,80)+"..."}
                    <button className="btnFour" onClick={()=>showDescription(element)}>{showMore ? "showLess" : "showMore"}</button></p>
                    <button className="remove" onClick={() => removeElement(id)}>Remove</button>
                </div>

                )
            }))}
        </div>
        </div>
    )
}
export default Shop;