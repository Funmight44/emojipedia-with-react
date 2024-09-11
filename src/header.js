 import test from "./img/test-1.jpg"
 import './index.css';


const  NavBar = () => {
    return ( 
        <div className="navbar">
             <img src={test} alt="test"/>
            <h1>Keeper App</h1>
            <button>Get Started</button>
        </div>
     );
}
 
export default NavBar ;