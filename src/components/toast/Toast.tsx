import { ToastInterface } from "../../interface/toastInterface";
import "../../assets/styles/components/toast/toast.css"
const Toast: React.FC<ToastInterface> = ({type, message}) => {
    return ( 
        <div className={`toast-container ${type}`}>
            {message}
        </div>
     );
}
 
export default Toast;