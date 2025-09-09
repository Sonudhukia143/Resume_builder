import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function Register({setUser}) {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <div className="grid lg:grid-cols-2 md:grid-cols-2">
                <div>
                    <img className="hidden md:block lg:block xlg:block w-full h-[100vh]" src="/public/choice-worker-concept/4155971.jpg" alt="hero"></img>
                </div>
                <div>
                    {
                        isLogin
                            ?
                            <Login setIsLogin={setIsLogin} setUser={setUser}/>
                            :
                            <SignUp setIsLogin={setIsLogin} setUser={setUser}/>
                    }
                </div>
            </div>
        </>
    )
}