import data from "../assets/data.json"
import moon from "../assets/assets/destination/image-moon.png"
import mars from "../assets/assets/destination/image-mars.png"
import eurupia from "../assets/assets/destination/image-europa.png"
import titan from "../assets/assets/destination/image-titan.png"

function Destination({dataC}) {
    const destinations =[moon,mars,eurupia,titan]
        

    return ( 
        <div className="box">
            <h6> <span>01</span> Pick YOUR DESTINATION </h6>
            <div className="destination">
            <div className="imgBox">
                <img src= {destinations[dataC.dest]}  alt="" />
            </div>
            <div className="description">
            <ul>
              <li onClick={()=>dataC.travel(0)}>MOON</li>
              <li onClick={()=>dataC.travel(1)}>MARS</li>
              <li onClick={()=>dataC.travel(2)}>EUROPA</li>
              <li onClick={()=>dataC.travel(3)}>TITAN</li>
            </ul>
            <h1>{data.destinations[dataC.dest].name}</h1>
            <p> {data.destinations[dataC.dest].description} </p>
            <div className="line1"></div>
            <div className="locate">
                <div>
                   <h5>AVG. DISTANCE</h5>
                   <h6> {data.destinations[dataC.dest].distance} </h6>
                </div>
                <div>
                   <h5>Est. travel time</h5>
                   <h6> {data.destinations[dataC.dest].travel}</h6>
                </div>
            </div>
            </div>
            
            
        </div>
        </div>
        
     );
}

export default Destination;