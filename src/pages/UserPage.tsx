import {useSelector} from "react-redux"
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom"
import SideBar from "../components/sidebar/SideBar";
import "../assets/styles/pages/userpage/userpage.css"

const UserPage: React.FC = () => {
    const user = useSelector( (state: RootState) => state.user.user)
    console.log(user)
    const navigate = useNavigate()
    const handleLogout = ():void => {
        localStorage.clear()
        navigate("/", {replace: true})
    }
    return ( 
        <div className="userpage-container">
            <div className="sidebar-container">
                <SideBar email={user.firstName ? user.firstName  : user.email} onClickLogout={handleLogout}/>
            </div>
            <div className="content-container">
                Content Goes Here. 
            </div>
        </div>
     );
}
 
export default UserPage;