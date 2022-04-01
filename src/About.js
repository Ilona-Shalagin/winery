import { useState } from "react";
import { info } from "./info";

function About(){

    const[picture,setPicture] = useState(0);
    const{image,description,showMore} = info[picture];
    
    const[showText,setShowText] = useState(false);

    const previousButton = () =>{
        setPicture((picture=>{
            picture--;
            if(picture < 0){
                return info.length-1;
            }
            return picture;
        })) 
    }
    const nextButton = () =>{
        setPicture((picture =>{
            picture++;
            if(picture > info.length-1){
                picture = 0
            }
            return picture;
            
        }))
    }
    const showTextClick = (info) =>{
        info.showMore = !info.showMore;
        setShowText(!showText);
        console.log(showText)
        
        
    }

    return(
              <div className="landing-page">
                <div className="container">
                <div className="btn">
                <button onClick={previousButton}>◀</button>
                </div>
                <div>
                    <img src={image} alt="winery" width="800px"height="600px"/>
                </div>
                <div className="btnOne">
                    <button onClick={nextButton}>▶</button>
                </div>
                </div>
                <p className="point">{showText ? description : description.substring(0,193)+"..."}
                <button className="btnThree" onClick={()=>showTextClick(info)}>{showText ? "showLess" : "showMore"}</button></p>
                </div>
            )
             
}
export default About;