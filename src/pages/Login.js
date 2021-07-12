import React, {useContext} from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../Contexts/AuthContexts';

import TextField from '@material-ui/core/TextField';
import { FormControl, Button } from '@material-ui/core';


import "../assets/login.css"

 function Login() {

    const history = useHistory();
    const {user, signWithGoogle} = useContext(AuthContext)

    async function navigateToNewRoom(){
        if(!user){
            await signWithGoogle()
        }
        history.push("/home")

    }
    return (
        <div className="container-login">
            <div className="overlay"></div>
            <FormControl className="form-login">
                <h1>Vamos Começar?</h1>
                <Button className="google" variant="contained" onClick={navigateToNewRoom}>
                    <img src="/images/icons/google.svg" />
                    Entrar com o google
                </Button>

                <p className="or"> OU </p>
                
                
                <div className="input-logins">
                    <img src="/images/icons/mail.svg" />
                    <TextField type="email" id="outlined-basic" label={ "seuemail@gmail.com"} variant="outlined" />
                </div>
                
                <div className="input-logins">
                    <img src="/images/icons/lock.svg" />
                    <TextField id="outlined-basic" type="password" label="sua senha" variant="outlined" />
                </div>

                <p className="create-account">Ainda não possui uma conta? <a href="#">Clique aqui</a></p>

                <button  className="btn-entrar" variant="contained">
                    <img src="/images/icons/log-in.svg"/>
                    Entrar
                </button>
            </FormControl>
        </div>
    )
}

export default Login
