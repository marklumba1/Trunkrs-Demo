import "../../assets/styles/components/entry/entry.css"
import FillForm from "../../assets/images/fill-form.svg"
import { EntryInterface } from "../../interface/entryInterface";
import { useRegisterUserMutation } from "../../features/api/api";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"
import Toast from "../toast/Toast";
const Registration: React.FC<EntryInterface> = ({onClickSwitch}) => {
    const [registerUser, {error, isError, isLoading, isSuccess}] = useRegisterUserMutation()
   
    const [formData, setFormData] = useState({
        email: ``,
        password: ``,
        firstName: ``,
        lastName: ``,
        age: ``
    })

    const navigate = useNavigate()

    const handleFormChange = (key: string, value: string | number): void => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault()
        registerUser(formData).unwrap().then(res => {
            localStorage.user = JSON.stringify(res)
            setTimeout(() => {
                navigate(`userpage/${res.user.id}`)
            }, 1000)
            
        })
    }

    return ( 
        <div className="entry-container">
            <div className="img-container">
                <img src={FillForm} alt="..."/>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <fieldset className="registration-fields" disabled={isLoading || isSuccess}>
                        <legend>Registration</legend>
                        <input type="email" onChange={e => handleFormChange(`email`, e.target.value)} placeholder="Email"/>
                        <input type="password" onChange={e => handleFormChange(`password`, e.target.value)} placeholder="Password" />
                        <input type="text" onChange={e => handleFormChange(`firstName`, e.target.value)} placeholder="First Name"/>
                        <input type="text" onChange={e => handleFormChange(`lastName`, e.target.value)} placeholder="Last Name"/>
                        <input type="text" onChange={e => handleFormChange(`age`, e.target.value)} placeholder="Age"/>
                        <button>Register</button>
                        {isLoading && <Toast type="loading" message="Loading..." />}
                        {isError && error && <Toast type="error" message={'data' in error ? error.data as string : JSON.stringify(error)}/>}
                        {isSuccess && <Toast type="success" message="Registered Successfully. Navigating to homepage..."/>}
                        
                    </fieldset>
                </form>
                <p>Already have an account? <span className="link" onClick={onClickSwitch}>Log in.</span></p>
               
            </div>
        </div>
     );
}
 
export default Registration;