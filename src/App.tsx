import { ReactElement, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import "./assets/styles/global/global.css"
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import { setUser } from "./features/user/userSlice";


interface ProtectedRouteProps {
    children: ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.user ? true : false)
    console.log(isAuthenticated)
    const dispatch = useDispatch()
    if (isAuthenticated) {
        dispatch(setUser(JSON.parse(localStorage.user).user))
        return children
    }
    else {
        return <Navigate to="/" replace />
    }
}

const App: React.FC = () => {
   
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userpage/:id" element={
                <ProtectedRoute> 
                    <UserPage/>
                </ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
        
     );
}
 
export default App;