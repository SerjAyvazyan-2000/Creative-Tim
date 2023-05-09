import './App.css';
import "../src/assets/Fonts/style.css"
import "../src/assets/style/index.scss"
import Sidebar from "./pages/sidebar/sidebar";
import MainContent from "./pages/content/content"
import {useState} from "react";

function App () {
    const [activeSid,setActiveSid] = useState(false)
    return (
        <div className="App">
            <Sidebar activeSid={activeSid}/>
            <MainContent activeSid={activeSid} setActiveSid={setActiveSid}/>
        </div>
    );
}

export default App;
