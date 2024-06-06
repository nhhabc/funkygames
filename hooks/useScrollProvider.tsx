import React, { useState } from "react"

const scrollContext = React.createContext({})

type TScrollProvider = {
  children: React.ReactNode
}

export const ScrollProvider = ({children}: TScrollProvider) => {
  const [offset, setOffset] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <scrollContext.Provider value={{ offset }}>
      {children}
    </scrollContext.Provider>
  )
}

export const useScrollProvider = () => {
  const { offset }: any = React.useContext(scrollContext);
  return { offset };
}