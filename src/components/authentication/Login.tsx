import { FormEvent, useState } from "react";
import DeliveryTruck from "../../assets/images/delivery-truck.svg"
import "../../assets/styles/components/entry/entry.css"
import { useLoginUserMutation } from "../../features/api/api";
import { EntryInterface } from "../../interface/entryInterface";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Toast from "../toast/Toast";
import { setUser } from "../../features/user/userSlice";

const Login: React.FC <EntryInterface> = ({onClickSwitch}) => {

    const [loginUser, {data, error, isError, isLoading, isSuccess}] = useLoginUserMutation()
    const [formData, setFormData] = useState({
        email: ``,
        password: ``
    })

    const navigate = useNavigate()
    
   
    const dispatch = useDispatch()

    const handleFormChange = (key: string, value: string): void => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        loginUser(formData).unwrap().then(res => {
            localStorage.user = JSON.stringify(res)
            dispatch(setUser(res))
            setTimeout(() => {
                navigate(`userpage/${res.user.id}`)
            }, 1000)
        })

    }

    return ( 
        <div className="entry-container">
            <div className="img-container">
                <img src={DeliveryTruck} alt="..."/>
            </div>
            <div className="form-container">
                <h1>Trunkrs Demo Login App</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={isLoading || isSuccess}>
                        <legend>Login</legend>
                        <input type="text" onChange={e => handleFormChange(`email`, e.target.value)} placeholder="Email"/>
                        <input type="password" onChange={e => handleFormChange(`password`, e.target.value)} placeholder="Password"/>
                        <button>Login</button>
                        {isLoading && <Toast type="loading" message="Loading..." />}
                        {isError && error && <Toast type="error" message={'data' in error ? error.data as string : JSON.stringify(error)}/>}
                        {isSuccess && <Toast type="success" message="Logged In Successfully"/>}
                    </fieldset>
                </form>
                <p>Not account yet? <span className="link" onClick={onClickSwitch}>Sign up.</span></p>
            </div>
        </div>
     );
}
 
export default Login;