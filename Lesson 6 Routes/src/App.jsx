//import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import Home from './Home'
import About from './About'

function App() {


    return (
        <div className='countenirDiv'>
            <HeaderComponent/>
            <Routes>
                <Route path='/home/*' element={<Home />} ></Route>
                <Route path='/About' element={<About />} ></Route>
            </Routes>

        </div>
    );
}

export default App;
