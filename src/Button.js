function Button({chosenWine}){
    return(
        <div className="btnFive">
         <button className="change" onClick={()=>chosenWine("Collection")}>Collection</button>
         <button className="change" onClick={()=>chosenWine("Red")}>Red</button>
         <button className="change" onClick={()=>chosenWine("Whites")}>Whites</button>
         <button className="change" onClick={()=>chosenWine("Sparkling")}>Sparkling</button>
        </div>
    )
}
export default Button;