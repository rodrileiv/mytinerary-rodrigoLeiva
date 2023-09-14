import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"


export const GoogleSignIn = ({handleGooglesign}) => {


    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }
        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data);
        console.log(userResponse)
        localStorage.setItem("token", userResponse.data.response.token);
        localStorage.setItem("user", JSON.stringify(userResponse.data.response.user));
        handleGooglesign(true)
    }

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "419231036637-1jtrej33bscf93a7vagmqisqb5v49b2k.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'rectangular', theme: "outline", locale: 'en', size: "large", text: 'signin_with' } 
            );
        }
    }, [])

    return (
        
        <div ref={googleButton} className='flex flex-wrap self-center'></div>
    )
}