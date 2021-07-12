import React, {useContext, useState} from 'react'
import { AuthContext } from '../Contexts/AuthContexts';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import Main from '../components/Main';

import "../assets/query.css";

function Home() {
    return (
            <div className="container_home">
                <LeftBar/>
                <Main/>
                {/* <RightBar/> */}
            </div>
    )
}

export default Home