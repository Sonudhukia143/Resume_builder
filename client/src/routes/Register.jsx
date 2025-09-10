import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function Register({setUser,setFlash}) {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <div className="grid lg:grid-cols-2 md:grid-cols-2">
                <div>
                    <img className="hidden md:block lg:block xlg:block w-full h-[100vh]" src="/choice-worker-concept/4155971.jpg" alt="hero"></img>
                </div>
                <div>
                    {
                        isLogin
                            ?
                            <Login setIsLogin={setIsLogin} setUser={setUser} setFlash={setFlash}/>
                            :
                            <SignUp setIsLogin={setIsLogin} setUser={setUser} setFlash={setFlash}/>
                    }
                </div>
            </div>
        </>
    )
}