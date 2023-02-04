import  logo  from "../assets/assets/shared/logo.svg";
function Header({container} ) {
    return (
        <header>
           <div className="logo"><img src={logo} alt="" /></div>
           <div className= "line"></div>
           <div className="navigation">
            <ul>
              <li onClick={()=>container(0)}> <span>00</span>HOME</li>
              <li onClick={()=>container(1)}><span>01</span>DESTINATION</li>
              <li onClick={()=>container(2)}><span>02</span>CREW</li>
              <li onClick={()=>container(3)}><span>03</span>TECHNOLOGY</li>
            </ul>
           </div>
        </header>
      );
}

export default Header;