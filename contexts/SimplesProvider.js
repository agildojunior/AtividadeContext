import React, {createContext} from 'react';

const SimplesContext = createContext({})

export function SimplesProvider ( { children } ){
    return(
        <SimplesContext.Provider value={{user: "ifrn"}}>
            { children }
        </SimplesContext.Provider>
    )
}

export default SimplesContext;