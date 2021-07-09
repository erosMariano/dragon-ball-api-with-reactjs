import React, {useContext} from 'react'
import { AuthContext } from '../Contexts/AuthContexts';
import { useHistory } from 'react-router'
import {firebase, auth} from "../firebase"


import { Avatar } from '@material-ui/core';
import "../assets/leftBarApp.css"

function LeftBarApp() {
    const {user, signWithGoogle} = useContext(AuthContext)
    const history = useHistory();

    if(!user){
        history.push("/")
    }
    function sair(e){
        e.preventDefault();
        firebase.auth().signOut().then(() =>{
            history.push("/")
        })
    }


    return (
        <>
            <header>
            <div className="over"></div>
                <div className="avatar">
                    <Avatar alt={user?.name} src={user?.avatar} />
                    <p>{user?.name}</p>
                </div>

                <button  className="btn-entrar" variant="contained" onClick={sair}>
                    <img src="/images/icons/log-in.svg"/>
                     Sair
                </button>

                
            </header>
        </>
    )
}

export default LeftBarApp
