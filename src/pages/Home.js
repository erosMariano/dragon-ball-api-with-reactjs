import React, {useContext, useState} from 'react'
import { AuthContext } from '../Contexts/AuthContexts';
import Header from "../components/Header"
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';

import LeftBarApp from "../components/LeftBarApp"
import Main from '../components/Main';


function Home() {
    const {user} = useContext(AuthContext);
    return (
            <div className="container_home">
                <LeftBar/>
                <Main />
                {/* <RightBar/> */}
                <LeftBar/>

            </div>
    )
}

export default Home