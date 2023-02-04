import data from "../assets/data.json"
import Douglas from "../assets/assets/crew/image-douglas-hurley.png"
import Mark from "../assets/assets/crew/image-mark-shuttleworth.png"
import Victor from "../assets/assets/crew/image-victor-glover.png"
import Anoushehan from "../assets/assets/crew/image-anousheh-ansari.png"

function Crew({dataC}) {
    const crewMem =[Douglas,Mark,Victor,Anoushehan]

    return ( 
        <div className="box2">
            <div className="inner">
            <h6> <span>02</span> Meet YOUR CREW </h6>
            
            <div className="descrip">
            <div>
                <h4> {data.crew[dataC.crew].role} </h4>
                <h3>{data.crew[dataC.crew].name}</h3>
            <p> {data.crew[dataC.crew].bio} </p>
            </div>
            
            <div className="slider1">
               <div onClick={()=>dataC.crewSel(0)}></div>
               <div onClick={()=>dataC.crewSel(1)}></div>
               <div onClick={()=>dataC.crewSel(2)}></div>
               <div onClick={()=>dataC.crewSel(3)}></div>
            </div>
            </div>
           
            
            </div>
            
        <div className="imgBox">
                <img src= {crewMem[dataC.crew]}  alt="" />
            </div>
        </div>
        
     );
}

export default Crew ;