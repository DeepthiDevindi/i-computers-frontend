import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function LoginPage() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()
    
    function HandleLogin() {

        axios.post(import.meta.env.VITE_API_URL + "/users/login" , {
            email: email,
            password: password
        }).then((response) => {
            console.log("Login successful:", response.data)
            localStorage.setItem("token", response.data.token)
            toast.success("Login successful!")

            if(response.data.isAdmin) {
                navigate("/admin")
            } else {
                navigate("/")
            }

        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[url('/login-bg.jpeg')] bg-center bg-cover text-secondary">
            <div className="w-1/2 h-full "></div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl shadow-2xl flex flex-col justify-center items-center ">
                    <h1 className="text-3xl font-bold mb-6">Sign in</h1>
                    <input 
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        }  
                        value={email}
                        placeholder="Email" 
                        className="w-3/4 p-2 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:accent" />
                    <input 
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }  
                        value={password}
                        type="password" 
                        placeholder="Password" 
                        className="w-3/4 p-2 mb-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:accent" />
                    <p className="mb-8 w-3/4 text-right text-white">Forget password? <a href="#" className="text-accent hover:underline">Click here</a></p>
                    <button onClick={HandleLogin} className="w-3/4 p-2 bg-accent text-white rounded-md ">Sign in</button>
                    <p className="mt-5 w-3/4 text-right text-white">Don't have an account? <a href="#" className="text-accent hover:underline">Sign up</a></p>

                </div>
            </div>

        </div>
    );
}