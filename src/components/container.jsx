import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";

function Container({dataC}) {
    let compotent 
    
   switch (dataC.menu) {
    case 0:
        compotent=<Home />
        break;
    case 1:
            compotent=<Destination dataC={dataC}/>
            break;
    case 2:
        compotent =<Crew dataC={dataC} />
        break;
    case 3:
        compotent=<Technology dataC={dataC}/> 
        break;   
    default:
        compotent=<Home />
        break;
   }

    return ( 
        <div className="main main2">
          {compotent}
        </div>
     );
}

export default Container;