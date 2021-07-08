import { createContext } from "react";
import { useEffect, useState } from "react";
import {auth,firebase} from "../firebase";
export const AuthContext = createContext({});

export function AuthContextProvider(props){

    const [user, setUser] = useState()

    useEffect(() =>{
      const unsubscribe = auth.onAuthStateChanged(user =>{
        if(user){
          if(user){
            const {displayName, photoURL, uid} = user;
    
            if(!displayName || !photoURL){
              throw new Error("Missign informartion")
            }
            
            setUser({
              id:uid,
              name: displayName,
              avatar: photoURL
            })
          }
        }
      })
  
      return () =>{
        unsubscribe();
      }
    }, [])
  
  
    async function signWithGoogle(){
      const provider =  new firebase.auth.GoogleAuthProvider();
  
      const result = await auth.signInWithPopup(provider)
        if(result.user){
          const {displayName, photoURL, uid} = result.user;
  
          if(!displayName || !photoURL){
            throw new Error("Missign informartion")
          }
          
          setUser({
            id:uid,
            name: displayName,
            avatar: photoURL
          })
        }
    }
  
  
    
    return(
        <AuthContext.Provider value={{user, signWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}