import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [playAnimation,setPlayAnimation] = useState(true)

    const stopPlay=()=>{
        setPlayAnimation(false)
    }


    const contextValue = {
        // valeurs:{
        //     playAnimation,
        //     stopPlay
        // }
        initialState:playAnimation,
        stopPlay:stopPlay
    };

    return (
        <AuthContext.Provider value={ contextValue }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;