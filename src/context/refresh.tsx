import { createContext, FC, ReactNode, useState } from 'react'

interface ContextType {
  mainShow: boolean
  updateMainShow: (val: boolean) => void
}

export const RefreshContext = createContext<ContextType>(null)

export const RefreshProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mainShow, setMainShow] = useState(true)

  const updateMainShow = (val: boolean) => {
    setMainShow(val)
  }

  return (
    <RefreshContext.Provider value={{ mainShow, updateMainShow }}>
      {children}
    </RefreshContext.Provider>
  )
}
