import './App.css';
import Header from './components/Header';
import backgroundImage1 from './assets/assets/home/background-home-desktop.jpg';
import backgroundImage2 from './assets/assets/destination/background-destination-desktop.jpg'
import backgroundImage3 from './assets/assets/crew/background-crew-desktop.jpg'
import backgroundImage4 from './assets/assets/technology/background-technology-desktop.jpg'
import Container from './components/container';
import Destination from './components/Destination';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(0);
  const [dest, setDest] = useState(0);
  const [crew, setCrew] = useState(0);
  const [tech, setTech] = useState(0);
  const background =[backgroundImage1, backgroundImage2,backgroundImage3,backgroundImage4]

  function container(val){
    setMenu(val);
    setCrew(0);
    setDest(0);
    setTech(0);

  }
  function travel(val){
    setDest(val);
    setCrew(0);
    setTech(0);
  }
  function crewSel(val){
    setCrew(val);
    setDest(0);
    setTech(0);
  }
  function technology(val){
    setTech(val);
    setCrew(0);
    setDest(0);
  }

  return (
    <div className="App" style={{backgroundImage: `url(${background[menu]})`, backgroundSize: "cover"}} >
      <Header container={container} />
      <Container dataC= {{menu:menu,dest:dest,crew:crew,tech:tech, travel, container,crewSel,technology}} />
    </div>
  )
}

export default App
