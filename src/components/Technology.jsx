import data from "../assets/data.json"
import Launch from "../assets/assets/technology/image-launch-vehicle-portrait.jpg"
import Spaceport from "../assets/assets/technology/image-spaceport-portrait.jpg"
import capsule from "../assets/assets/technology/image-space-capsule-portrait.jpg"


function Technology({dataC}) {
    const techno =[Launch,Spaceport,capsule]
    return ( 
        <div className="box3">
             <h6> <span>03</span> SPACE LAUNCH 101 </h6>
            <div className="innerbox">
                  
                    <div className="selector">
                        <div onClick={()=>dataC.technology(0)}>1</div>
                        <div onClick={()=>dataC.technology(1)}>2</div>
                        <div onClick={()=>dataC.technology(2)}>3</div>
                    </div>
                    <div className="detail">
                        <p>THE TERMINOLOGY…</p>
                        <h3 style={{minWidth:'500px'}}> {data.technology[dataC.tech].name} </h3>
                        <p>{data.technology[dataC.tech].description}</p>
                    </div>
                
                <div className="imgbox">
                    <img src={techno[dataC.tech]} alt="" />
                </div>
            </div>

        </div>
     );
}

export default Technology;