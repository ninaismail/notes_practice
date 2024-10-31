import { createContext, useState } from 'react'

export const NoteContext = createContext({})

export const NoteContextProvider = ({ children }) => {
    const [addedNote, setAddedNote] = useState({});

  return (
    <NoteContext.Provider value={{ addedNote, setAddedNote }}>
      {children}
    </NoteContext.Provider>
  )
}