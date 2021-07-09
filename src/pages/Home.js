import React, {useContext, useState} from 'react'
import { AuthContext } from '../Contexts/AuthContexts';
import Header from "../components/Header"
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';

import LeftBarApp from "../components/LeftBarApp"


function Home() {
    const {user} = useContext(AuthContext);
    return (
            <div>
                <LeftBar/>
                {/* <RightBar/> */}


            </div>
    )
}

export default Home