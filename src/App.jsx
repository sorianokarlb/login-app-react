import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
const App = () => {


    return (
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/signup" element={<SignupForm/>}/>
        </Routes>
    )
}


export default App;