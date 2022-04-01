import { useState } from "react";
import { Tour } from "./Tour"

function Contact(){
    const[contact,setContact] = useState(Tour);
    const[text,setText] = useState(false);
    
    const createText = (element) =>{
       element.showMore = ! element.showMore;
       setText(!text)
    }

    
    return(
        <div className="page-project">
        <div className="top">
           <p className="text">You must email or call ahead to book a tour, and you'll need to arrive in a private car to navigate the vast underground cave network.<br></br>

The cheapest tour includes three wines; pay a bit more and you'll get a full lunch in their impressive tasting room, accessible by a 3-tonne secret stone door.<br></br> All tasting is done underground in the cellars.

The tours last one to two hours including the tastings and lunch.<br></br> The simplest option is to book them through a travel agency, which will supply a car and driver for the boozy tour.<br></br> If you're self-driving, bring a small car to better navigate the caves. The winery supplies an English-speaking guide to travel along with you in your car.</p>
        </div>
        <hr></hr>
        <div>
        <div className="tickets">
            <h3>Tickets&Tours</h3>
            </div>
        {contact.map((element=>{
            const{id,group,price,details,showMore} = element;
            return( 
         <div key={id} className="ticket" >
             <div>
            <p>{group} - ${price} </p>
            </div>
            <div>
            <p className="descr">{ showMore ? details : details.substring(0,0)}
            <button className="btnSix" onClick={()=> createText(element)}>{showMore ? "Details" : "Details"} </button></p>
            </div>
            </div>
        ) 
        }))} 
        </div>
        <hr></hr>
        <div>
            <div className="tickets">
            <h3>Contact Us</h3>
            </div>
            <div className="info">
                <p>Address - Mileştii Mici town</p>
                </div>
                <div className="info">
                <p>Phone - 069 500 262</p>
                </div>
                <div className="info">
                <p> Email - delegatie@mm.in.md"</p>
                </div>
                <div className="info">
                <p>Website - www.milestii-mici.md</p>
                </div>
                <div className="info">
                <p>Hours - 8am-5pm Mon-Fri</p>
                </div>
            </div>
        </div>
        
    )
}
export default Contact;