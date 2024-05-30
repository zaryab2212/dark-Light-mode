import {  createContext, useContext, useState } from "react";

export const ModeContext = createContext()

export const ModeProvider = ({children}) =>{
   const [ isDark, setIsDark ] = useState(false)


   return <ModeContext.Provider value={{isDark ,setIsDark}}>{children}</ModeContext.Provider>
}
export const useGlobleMode = ()=> useContext(ModeContext)
