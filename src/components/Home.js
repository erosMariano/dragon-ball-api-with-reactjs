import React, {useContext} from 'react'
import { AuthContext } from '../Contexts/AuthContexts';



function Home() {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1>{user?.name}</h1>
            <p>Home</p>
        </div>
    )
}

export default Home
