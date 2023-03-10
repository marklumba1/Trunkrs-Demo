import { useState } from "react";
import "../assets/styles/pages/home/home.css"
import Login from "../components/authentication/Login";
import Registration from "../components/authentication/Registration";
const Home: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true)
    const handleClick = () => {
        setIsLogin(!isLogin)
    }
    return ( 
        <div className="home-container">
            {isLogin ?  <Login onClickSwitch={handleClick}/> :  <Registration onClickSwitch={handleClick}/>}
        </div>
     );
}
 
export default Home;